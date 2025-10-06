"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full py-16 px-6 text-center text-white bg-gradient-to-b from-[#0d0d0d] to-[#111]">
      <div className="max-w-4xl mx-auto">
        {/* Small Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl mb-1 max-md:text-xl font-bold text-gray-300"
        >
          Ready to Transform Your Business?
        </motion.p>

        {/* Big Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl max-md:text-4xl leading-snug mb-8"
        >
          Let’s build your next success story with <br /> Reavyn Tech Alliance.
        </motion.h2>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium 
                     bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg hover:opacity-90 transition"
        >
          Get a Quote →
        </motion.a>
      </div>
    </section>
  );
}
