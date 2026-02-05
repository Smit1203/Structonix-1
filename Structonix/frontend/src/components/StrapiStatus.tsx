'use client';

import { useEffect, useState } from 'react';

interface StrapiHealthStatus {
  isConnected: boolean;
  error?: string;
}

export function StrapiStatus() {
  const [status, setStatus] = useState<StrapiHealthStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStrapi = async () => {
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const response = await fetch(`${strapiUrl}/_health`, {
          method: 'HEAD',
        });

        setStatus({
          isConnected: response.ok,
        });
      } catch (error) {
        setStatus({
          isConnected: false,
          error: error instanceof Error ? error.message : 'Connection failed',
        });
      } finally {
        setLoading(false);
      }
    };

    checkStrapi();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Checking Strapi connection...
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 p-3 rounded-lg ${status?.isConnected
        ? 'bg-green-100 dark:bg-green-900/30'
        : 'bg-red-100 dark:bg-red-900/30'
      }`}>
      <div className={`w-3 h-3 rounded-full ${status?.isConnected ? 'bg-green-500' : 'bg-red-500'
        }`} />
      <span className={`text-sm ${status?.isConnected
          ? 'text-green-700 dark:text-green-300'
          : 'text-red-700 dark:text-red-300'
        }`}>
        {status?.isConnected
          ? 'Strapi is connected'
          : `Strapi is not running${status?.error ? `: ${status.error}` : ''}`
        }
      </span>
    </div>
  );
}
