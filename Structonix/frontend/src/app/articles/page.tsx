import { fetchStrapi, getStrapiMediaUrl } from '@/lib/strapi';
import Link from 'next/link';

// Define the Article type based on your Strapi content type
interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export default async function ArticlesPage() {
  let articles: Article[] = [];
  let error: string | null = null;

  try {
    // Fetch articles from Strapi
    const response = await fetchStrapi<Article[]>('articles', {
      populate: '*',
      sort: 'createdAt:desc',
    });
    articles = response.data;
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to fetch articles';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Link
            href="/"
            className="text-purple-300 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mt-4">Articles</h1>
          <p className="text-purple-200 mt-2">
            Content fetched from Strapi CMS
          </p>
        </div>

        {error ? (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-6">
            <h2 className="text-red-300 font-semibold mb-2">Error fetching articles</h2>
            <p className="text-red-200">{error}</p>
            <div className="mt-4 text-sm text-red-200">
              <p>Make sure:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Strapi is running at http://localhost:1337</li>
                <li>You have created an &quot;Article&quot; content type</li>
                <li>API permissions are set (Settings → Roles → Public → Enable find)</li>
              </ul>
            </div>
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-6">
            <h2 className="text-yellow-300 font-semibold mb-2">No articles found</h2>
            <p className="text-yellow-200">
              Create some articles in Strapi Admin to see them here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <h2 className="text-xl font-semibold text-white mb-2">
                  {article.title}
                </h2>
                {article.description && (
                  <p className="text-purple-200 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                )}
                <div className="flex justify-between items-center text-sm text-purple-300">
                  <span>
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/articles/${article.slug || article.documentId}`}
                    className="text-purple-400 hover:text-white transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Instructions Card */}
        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">How This Works</h2>
          <div className="text-purple-200 space-y-2">
            <p><strong className="text-white">1.</strong> This page fetches data from: <code className="bg-black/30 px-2 py-1 rounded">http://localhost:1337/api/articles</code></p>
            <p><strong className="text-white">2.</strong> The <code className="bg-black/30 px-2 py-1 rounded">fetchStrapi()</code> function in <code className="bg-black/30 px-2 py-1 rounded">src/lib/strapi.ts</code> handles the API call</p>
            <p><strong className="text-white">3.</strong> Create content in Strapi Admin, and it appears here automatically</p>
          </div>
        </div>
      </div>
    </div>
  );
}
