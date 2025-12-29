import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
};

function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title || 'Sem título',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        categories: Array.isArray(data.categories) ? data.categories.map(String) : [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-700 mb-4">🐾 Blog Opitweb</h1>
          <p className="text-xl text-purple-500">
            Dicas, guias e tudo sobre produtos pet com economia inteligente
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <p className="text-gray-600 text-lg">
              Nenhum post encontrado. Adicione seus posts na pasta{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">app/blog/posts/</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
                {post.categories.length > 0 && (
                  <div className="px-6 pt-6 pb-2 flex flex-wrap gap-2">
                    {post.categories.slice(0, 3).map((category: string, idx: number) => (
                      <span key={idx} className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                <div className="px-6 py-4 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  <time className="text-sm text-gray-500 mb-4" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </time>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center text-purple-700 hover:text-purple-900 transition-colors">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
