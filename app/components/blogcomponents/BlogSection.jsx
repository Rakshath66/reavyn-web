"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in E-Commerce",
    subtitle: "How AI recommendations are changing retail.",
    author: "Writer Name",
    date: "5 September 2025",
    image:
      "https://i.ibb.co/PGh9FPVh/Image-2.png",
    content: `
### Introduction
In today’s digital-first world, your website often forms the first impression of your brand. If it isn’t mobile-friendly, you risk losing potential customers who browse primarily on their phones.

### Why Mobile-Responsive Websites Matter
A responsive design ensures websites adapt to all screen sizes, enhancing the user experience and increasing engagement.

- **Better User Experience**: Faster loading times and easier navigation.
- **Higher Google Rankings**: Google favors responsive designs.
- **Stronger Brand Credibility**: A polished, accessible website enhances trust.

### Real-World Example
Imagine a customer browsing your store from their phone and easily completing a purchase — that’s the power of responsiveness.

### Conclusion
Mobile responsiveness is not optional anymore; it’s essential for growth and visibility in 2025.
    `,
  },
  {
    id: 2,
    title: "JLR Is in Big Trouble",
    subtitle: "How AI recommendations are changing retail.",
    author: "Writer Name",
    date: "5 September 2025",
    image:
      "https://cdn.pixabay.com/photo/2016/03/09/09/22/airport-1245817_1280.jpg",
    content: `
### Introduction
The global automobile industry faces one of its toughest challenges with rapid EV transformation.

### Why It Matters
Companies must adapt to electric and autonomous vehicles or risk extinction.

- **Innovation Lag**: Slow adaptation can cripple growth.
- **Consumer Shifts**: Buyers are becoming eco-conscious.
- **Supply Chain Pressure**: Component sourcing challenges.

### Conclusion
Brands that embrace AI and automation will thrive — others will fade.
    `,
  },
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section
      className="min-h-screen w-full text-white bg-black bg-[url('https://i.ibb.co/fzKzhNJr/Dotted-Pop-Halftone-Geometric-Texture-2-Streamline-Textures-Geometric.png')]   py-16 px-6 md:px-16"
    >
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {/* FEATURED READS */}
            <h2 className="text-3xl font-bold mb-8 tracking-wide">
              FEATURED READS
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {blogPosts.slice(0, 2).map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{post.subtitle}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {post.author} | {post.date}
                    </p>
                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition-all px-4 py-2 rounded-lg text-sm font-medium">
                      Read Now →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LATEST ARTICLES */}
            <h2 className="text-3xl font-bold mb-8 tracking-wide">
              LATEST ARTICLES
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{post.subtitle}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {post.author} | {post.date}
                    </p>
                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition-all px-4 py-2 rounded-lg text-sm font-medium">
                      Read →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="single"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </button>

            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {selectedPost.title}
            </h1>
            <p className="text-gray-400 mb-2">{selectedPost.subtitle}</p>
            <p className="text-xs text-gray-500 mb-6">
              {selectedPost.author} | {selectedPost.date}
            </p>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="rounded-xl w-full mb-8"
            />

            <div
              className="prose prose-invert max-w-none leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: selectedPost.content.replace(/\n/g, "<br />"),
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;
