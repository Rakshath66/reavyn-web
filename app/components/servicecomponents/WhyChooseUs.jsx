"use client";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 text-white bg-black"
      style={{
        backgroundImage: "url('https://i.ibb.co/fzKzhNJr/Dotted-Pop-Halftone-Geometric-Texture-2-Streamline-Textures-Geometric.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto max-md:-ml-20 max-md:text-left  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="ml-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl max-md:text-4xl mb-6"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl w-[27rem] text-gray-300 max-md:w-[20rem] mb-8 leading-relaxed"
          >
            Discover what sets Reavyn Tech Alliance apart in delivering
            exceptional tech solutions
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium 
                       bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg hover:opacity-90 transition"
          >
            Get in Touch →
          </motion.a>
        </div>

        {/* Right Side */}
        <div className="ml-32 max-md:ml-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            Service that you can trust
          </motion.h3>

          <ul className="space-y-4 text-lg text-gray-300">
            {[
              "100% Tailored Solutions",
              "Fast, Secure & Scalable",
              "Expert in Latest Technologies",
              "Transparent Process",
              "Dedicated Post-Launch Support",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-white"></span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
