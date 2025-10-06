"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import ProcessSection from "../components/ProcessSection";
import ShowcaseSlider from "../components/ShowcaseSlider";
import CaseStudySlider from "../components/CaseStudySlider";
import TestimonialsSlider from "../components/TestimonialsSlider";
import FAQSection from "../components/FAQSection";
import Contact from "../components/Contact";
import InfiniteMarquee from "../components/InfiniteMarquee";

const features = [
  "High-Performance Websites",
  "Mobile Applications",
  "AI Driven Tools",
  "Automation Solutions",
  "and many more",
];

export default function HomeSection() {
  const canvasRef = useRef(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Trigger content ready after component mounts
  useEffect(() => {
    setContentLoaded(true);
  }, []);

  // Animated Background Dots (Lazy load after content is ready)
  useEffect(() => {
    if (!contentLoaded) return;
    if (!canvasRef.current) return; // Ensure canvas exists
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
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

    // Optional: cleanup on unmount
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [contentLoaded]);

  return (
    <>
      <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
        {/* Always render canvas to avoid null ref */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Content */}
        <div className="relative z-10 max-md:mt-20 max-md:mb-10 grid md:grid-cols-2 gap-12 max-w-7xl px-6 max-md:px-1 max-md:pt-10 m-auto">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: contentLoaded ? "260px" : 0,
                opacity: contentLoaded ? 1 : 0,
                borderRadius: "9999px",
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="bg-white overflow-hidden shadow-lg flex items-center px-4 max-md:mb-4 mb-2 py-1"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: contentLoaded ? 1 : 0,
                  x: contentLoaded ? 0 : -20,
                }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="text-black text-md font-medium whitespace-nowrap"
              >
                Prepare For Future — AI-Ready
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{
                opacity: contentLoaded ? 1 : 0,
                x: contentLoaded ? 0 : -40,
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Empowering Your Business with <br />
              Smart Digital Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: contentLoaded ? 1 : 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-lg text-gray-400"
            >
              From Scratch To Enhanced.
            </motion.p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              x: contentLoaded ? 0 : 40,
            }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 ml-0 md:ml-36 max-md:mt-[-1rem] mt-20"
          >
            <motion.h3
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{
                opacity: contentLoaded ? 1 : 0,
                x: contentLoaded ? 0 : 40,
                y: contentLoaded ? 0 : 20,
              }}
              transition={{ duration: 0.8 }}
              className="text-3xl max-md:text-2xl font-semibold mb-4"
            >
              Checking All The Right Boxes
            </motion.h3>

            <ul className="space-y-2">
              {features.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30, y: 20 }}
                  animate={{
                    opacity: contentLoaded ? 1 : 0,
                    x: contentLoaded ? 0 : 30,
                    y: contentLoaded ? 0 : 20,
                  }}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                  className="flex items-center gap-3 text-xl max-md:text-lg"
                >
                  <span className="w-5 h-5 bg-white text-black rounded-sm flex items-center justify-center">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20, y: 8 }}
              animate={
                contentLoaded
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: 20, y: 8 }
              }
              transition={{
                delay: 0.12 + (features?.length ?? 0) * 0.15 + 0.3,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1], // smooth ease-out style bezier
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(120,85,255,0.12)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-6 px-8 py-3 text-white font-medium border-2 border-[#756BFF] rounded-lg bg-transparent hover:bg-[#564AFF] transition-shadow duration-300"
            >
              Schedule a Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <HomeAbout />
      <HomeServices />
      <ProcessSection />
      <ShowcaseSlider />
      <CaseStudySlider />
      <TestimonialsSlider />
      {/* <InfiniteMarquee/> */}
      <Contact />
      <FAQSection />
    </>
  );
}
