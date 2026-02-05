/**
 * Strapi Content Types
 * Define your content types here based on your Strapi schema
 */

import { StrapiEntity, StrapiMedia } from '@/lib/strapi';

// Example: Article content type
export interface ArticleAttributes {
  title: string;
  slug: string;
  description?: string;
  content?: string;
  cover?: {
    data: StrapiMedia | null;
  };
  category?: {
    data: StrapiEntity<CategoryAttributes> | null;
  };
}

export type Article = StrapiEntity<ArticleAttributes>;

// Example: Category content type
export interface CategoryAttributes {
  name: string;
  slug: string;
  description?: string;
  articles?: {
    data: Article[];
  };
}

export type Category = StrapiEntity<CategoryAttributes>;

// Example: Page content type
export interface PageAttributes {
  title: string;
  slug: string;
  content?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export type Page = StrapiEntity<PageAttributes>;

// Example: Global settings (single type)
export interface GlobalAttributes {
  siteName: string;
  siteDescription?: string;
  favicon?: {
    data: StrapiMedia | null;
  };
  defaultSeo?: {
    metaTitle?: string;
    metaDescription?: string;
    shareImage?: {
      data: StrapiMedia | null;
    };
  };
}

export type Global = StrapiEntity<GlobalAttributes>;
