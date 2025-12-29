import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Interface para o Post
interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
  content: string;
}

async function getPostBySlug(slug: string): Promise<PostData | null> {
  try {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || 'Sem título',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      categories: Array.isArray(data.categories) ? data.categories : [],
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => ({ slug: fileName.replace(/\.mdx$/, '') }));
}

const components: any = { // Usando any aqui para flexibilizar os tipos dos componentes MDX
  h1: (props: any) => <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-700 mb-4 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-purple-600 hover:underline" {...props} />,
  img: (props: any) => <img className="rounded-lg shadow-lg my-6 w-full" {...props} />,
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <nav className="mb-8">
          <Link href="/blog" className="text-purple-600 hover:text-purple-800 font-semibold">
            ← Voltar para o blog
          </Link>
        </nav>
        
        <header className="mb-12">
          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category: string, idx: number) => (
                <span key={idx} className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                  {category}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        </header>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* @ts-expect-error - Solução para o erro de tipo do MDXRemote no Next.js 14 */}
            <MDXRemote source={post.content} components={components} />
          </div>
        </div>
      </article>
    </div>
  );
}
