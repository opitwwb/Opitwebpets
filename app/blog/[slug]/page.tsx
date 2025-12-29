import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Função para obter o conteúdo de um post específico
async function getPostBySlug(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || 'Sem título',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      categories: data.categories || [],
      content,
    };
  } catch (error) {
    return null;
  }
}

// Gerar páginas estáticas para todos os posts (otimização Next.js)
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => ({
      slug: fileName.replace(/\.mdx$/, ''),
    }));
}

// Componentes personalizados para renderizar o MDX com estilo
const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-700 mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => <a className="text-purple-600 hover:text-purple-800 underline font-semibold" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 my-6 bg-purple-50 py-2" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-purple-600" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-lg shadow-lg my-6 w-full" alt="" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6 rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 border" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-purple-100" {...props} />,
  th: (props: any) => (
    <th className="px-6 py-3 text-left text-xs font-bold text-purple-800 uppercase tracking-wider" {...props} />
  ),
  td: (props: any) => (
    <td className="px-6 py-4 text-sm text-gray-700 border-b" {...props} />
  ),
  strong: (props: any) => <strong className="font-bold text-gray-900" {...props} />,
};

// Componente principal da página
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  
  // Se o post não existir, mostrar página 404
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb - Navegação */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center font-semibold"
          >
            ← Voltar para o blog
          </Link>
        </nav>
        
        {/* Cabeçalho do Post */}
        <header className="mb-12">
          {/* Categorias */}
          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
          
          {/* Título Principal */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          {/* Data de Publicação */}
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime={post.date}>
              📅 {new Date(post.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </time>
          </div>
          
          {/* Linha divisória */}
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mt-6 rounded-full"></div>
        </header>
        
        {/* Conteúdo do Post em MDX */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
        </div>
        
        {/* Rodapé do Post - CTA */}
        <footer className="mt-12 p-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl shadow-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">💚 Gostou do conteúdo?</h3>
          <p className="text-lg mb-6 opacity-95">
            Continue acompanhando o blog Opitweb para mais dicas sobre produtos pet e economia inteligente!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-lg"
            >
              Ver mais posts
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-900 transition-all duration-300 shadow-lg"
            >
              Fale conosco
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
