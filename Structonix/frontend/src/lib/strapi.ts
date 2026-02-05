/**
 * Strapi API Client
 * Utility functions for fetching data from Strapi CMS
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiError {
  status: number;
  name: string;
  message: string;
}

interface FetchOptions {
  populate?: string | string[] | Record<string, unknown>;
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  cache?: RequestCache;
  revalidate?: number;
}

/**
 * Build query string from options
 */
function buildQueryString(options: FetchOptions): string {
  const params = new URLSearchParams();

  if (options.populate) {
    if (typeof options.populate === 'string') {
      params.append('populate', options.populate);
    } else if (Array.isArray(options.populate)) {
      options.populate.forEach((p) => params.append('populate', p));
    } else {
      params.append('populate', JSON.stringify(options.populate));
    }
  }

  if (options.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, String(value));
    });
  }

  if (options.sort) {
    if (Array.isArray(options.sort)) {
      options.sort.forEach((s) => params.append('sort', s));
    } else {
      params.append('sort', options.sort);
    }
  }

  if (options.pagination) {
    if (options.pagination.page) {
      params.append('pagination[page]', String(options.pagination.page));
    }
    if (options.pagination.pageSize) {
      params.append('pagination[pageSize]', String(options.pagination.pageSize));
    }
  }

  return params.toString();
}

/**
 * Fetch data from Strapi API
 */
export async function fetchStrapi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<StrapiResponse<T>> {
  const queryString = buildQueryString(options);
  const url = `${STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ''}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const fetchOptions: RequestInit = {
    headers,
    cache: options.cache,
  };

  if (options.revalidate !== undefined) {
    fetchOptions.next = { revalidate: options.revalidate };
  }

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const error: StrapiError = await response.json();
    throw new Error(`Strapi Error: ${error.message}`);
  }

  return response.json();
}

/**
 * Fetch a single entry by ID
 */
export async function fetchStrapiById<T>(
  endpoint: string,
  id: string | number,
  options: FetchOptions = {}
): Promise<StrapiResponse<T>> {
  return fetchStrapi<T>(`${endpoint}/${id}`, options);
}

/**
 * Get full URL for Strapi media
 */
export function getStrapiMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

/**
 * Strapi media attributes type
 */
export interface StrapiMedia {
  id: number;
  attributes: {
    url: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: {
      thumbnail?: { url: string; width: number; height: number };
      small?: { url: string; width: number; height: number };
      medium?: { url: string; width: number; height: number };
      large?: { url: string; width: number; height: number };
    };
  };
}

/**
 * Base Strapi entity type
 */
export interface StrapiEntity<T> {
  id: number;
  attributes: T & {
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  };
}
