import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// Interface para o TypeScript parar de reclamar
interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
}

function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || 'Sem título',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        categories: Array.isArray(data.categories) ? data.categories : [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">🐾 Blog Opitweb</h1>
          <p className="text-xl text-purple-100">Dicas e economia para seu pet</p>
        </header>
        
        {posts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-xl">
            <p className="text-gray-600">Nenhum post encontrado em app/blog/posts/</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
                
                {/* AQUI ESTAVA O ERRO - AGORA CORRIGIDO COM (category: string) */}
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
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <time>{new Date(post.date).toLocaleDateString('pt-BR')}</time>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:brightness-110 transition-all">
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
