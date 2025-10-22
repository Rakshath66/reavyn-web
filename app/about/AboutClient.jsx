"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, Linkedin, Instagram } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import WhyChooseUs from "../components/servicecomponents/WhyChooseUs";
import CTASection from "../components/CTASection";
import TeamSection from "../components/aboutcomponents/TeamSection";
import CoreValues from "../components/aboutcomponents/CoreValues";

export default function AboutClient() {
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
            Building the Future of Technology
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-7xl max-md:text-4xl font-bold leading-tight mb-6"
          >
            Reavyn Tech Alliance Architects of the Code
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
            Learn about our journey and commitment to innovation.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/portfolio"
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
            See Portfolio
          </motion.a>
        </div>
      </section>

      <section
        className="relative text-white py-20 px-6  bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/tT3mJkQC/2x-1.png')`,
        }}
      >
        {/* Overlay for subtle dim effect */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto">
          {/* Small heading */}
          <p className="text-gray-300 text-lg mb-2 tracking-wide">
            Our Journey
          </p>

          {/* Main heading */}
          <h2 className="text-3xl max-md:text-3xl font-semibold mb-6">
            Reavyn’s Company Story
          </h2>

          {/* Description text */}
          <p className="text-gray-200 leading-relaxed text-4xl max-md:text-lg">
            We are Reavyn Tech Alliance, a dedicated team of innovators,
            developers, and strategists united by a passion for mastering
            technology. Operating from a global network, we harness our diverse
            expertise to transform your ideas into unbreakable digital
            solutions, leveraging AI and automation with surgical precision.
          </p>
        </div>
      </section>

      <TeamSection />
      <CoreValues />
      <WhyChooseUs />
      <CTASection />

      {/* Info Card */}
      <div className="bg-black">
        <section className="w-full mx-auto px-44 max-md:pl-6 bg-white text-black rounded-2xl shadow-md p-12 flex max-md:flex-col md:flex-row justify-between gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <p className="text-xl text-black">Availability</p>
            <h2 className="text-3xl max-md:text-2xl max-md:w-[340px] font-bold mt-2 leading-snug">
              Let’s connect & build your products{" "}
              <br className="max-md:hidden" />
              that connect with mass audience
            </h2>

            <div className="mt-6 space-y-1 ">
              <p className="flex gap-3 max-md:w-75 max-md:gap-7 text-gray-700">
                <span className="w-20 font-medium">Time</span>
                <span>Mon - Sat | 10:00 AM – 6:00 PM IST</span>
              </p>
              <p className="flex gap-3 max-md:w-75 max-md:gap-8 text-gray-700">
                <span className="w-20 font-medium">Contact</span>
                <span>
                  razi@reavyn.com |{" "}
                  <span className="whitespace-nowrap">+91-8188988301</span>
                </span>
              </p>
              <p className="flex gap-3 max-md:w-75 max-md:gap-4 text-gray-700">
                <span className="w-20 font-medium">Address</span>
                <span>New Ashok Nagar, New Delhi, 110096, India</span>
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 absolute max-md:relative max-md:ml-0 mt-14 ml-[48em]">
            <p className="text-lg max-md:text-base max-md:w-75 text-black">
              We’d love to hear from you, you’ll hear from us.
            </p>
            <h3 className="text-2xl max-md:w-75 font-bold mt-2">
              Let’s Connect on Socials
            </h3>

            <div className="flex items-center gap-6 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/reavyn-pvt-ltd/?viewAsMember=true"
                className="text-black hover:text-blue-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={60} />
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-black hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <Instagram size={60} />
              </a>
              {/* X (Twitter) */}
              <a
                href="#"
                className="text-black hover:text-gray-700 transition"
                aria-label="Twitter"
              >
                <BsTwitterX size={60} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
