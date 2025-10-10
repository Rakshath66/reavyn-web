import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Insights & Innovations`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main
      className="min-h-screen bg-black pt-36 text-white py-12 px-6 md:px-16"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/fzKzhNJr/Dotted-Pop-Halftone-Geometric-Texture-2-Streamline-Textures-Geometric.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
        <p className="text-sm text-gray-300 mb-2">{post.description}</p>
        <p className="text-xs text-gray-500 mb-6">
          {post.author} • {post.date}
        </p>

        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl mb-8"
        />

        {/* Content Supports Headings, Paragraphs, Lists, etc. */}
        <article
          className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-400 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </main>
  );
}
