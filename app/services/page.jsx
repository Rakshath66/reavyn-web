"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Service2 from "../components/servicecomponents/Service2";
import WhyChooseUs from "../components/servicecomponents/WhyChooseUs";
import CaseStudySlider from "../components/CaseStudySlider";
import CTASection from "../components/CTASection";
import WebsiteService from "../components/servicecomponents/WebsiteService";
import WhatWeOffer from "../components/servicecomponents/WhatWeOffer";

export default function ServicesPage() {
  const canvasRef = useRef(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  // Background dots animation
  useEffect(() => {
    if (!contentLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, [contentLoaded]);

  return (
    <>
      <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
        {/* Background Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Overlay Gradient (optional for depth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto mt-20 text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ duration: 0.8 }}
            className="bg-white text-black font-medium text-sm md:text-base rounded-3xl shadow-lg inline-flex items-center justify-center px-6 py-2 mb-8"
          >
            Unleashing Precision Tech Solutions
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Empowering Your Business <br />
            with Expert Development <br /> and Design
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 10,
            }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-300 mb-10 leading-relaxed"
          >
            Discover how{" "}
            <span className="font-semibold">Reavyn Tech Alliance</span> crafts
            cutting-edge digital solutions to drive your success.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 30,
            }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-block bg-gradient-to-r hover:bg-[#564AFF] border-2 border-[#756BFF] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
          >
            Request a Strategy →
          </motion.a>
        </div>
      </section>

      <Service2 />
      <WebsiteService />
      <WhatWeOffer />
      <WhyChooseUs />
      <CaseStudySlider />
      <CTASection />
    </>
  );
}
