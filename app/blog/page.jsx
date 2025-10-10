import Link from "next/link";
import { blogPosts } from "./blogData";

export const metadata = {
  title: "Blog — Insights & Innovations",
  description:
    "Explore articles on AI, development, SEO and digital trends. Featured reads + latest articles.",
};

export default function BlogListingPage() {
  const featuredReads = blogPosts.slice(0, 2);
  const latestArticles = blogPosts.slice(2, 6);

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full h-[60vh] bg-cover bg-center pt-24 bg-black flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/H1Pxy0T/Frame-249.png')",
        }}
      >
        <div className="px-6">
          <h1 className="text-6xl max-md:text-3xl font-mono text-white mb-4">
            Blog — Insights & Innovations
          </h1>
          <p className="text-gray-300 font-mono text-3xl max-md:text-lg mb-8">
            Explore articles on AI, development, and digital trends.
          </p>
          <a href="#latest" className="px-6 py-2 border border-[#3b82f6] text-white font-mono rounded-md hover:bg-[#3b82f6]/10 hover:shadow-[0_0_10px_#3b82f6] transition-all duration-300">
            Read Latest
          </a>
        </div>
      </section>

      {/* Blog Cards */}
      <main
        className="min-h-screen bg-black text-white py-16 px-6 md:px-16"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/fzKzhNJr/Dotted-Pop-Halftone-Geometric-Texture-2-Streamline-Textures-Geometric.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Featured Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              FEATURED READS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredReads.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-600/20 transition duration-300"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                      <span>{p.author}</span>
                      <span>{p.date}</span>
                    </div>
                    <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Latest Section */}
          <section id="latest">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              LATEST ARTICLES
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {latestArticles.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-600/20 transition duration-300"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-300 mt-1 line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-3 text-xs text-gray-400">
                      {p.author} • {p.date}
                    </div>
                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
