"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, Linkedin, Instagram } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import WhyChooseUs from "../components/servicecomponents/WhyChooseUs";
import CTASection from "../components/CTASection";
import TeamSection from "../components/aboutcomponents/TeamSection";
import CoreValues from "../components/aboutcomponents/CoreValues";
import ShowcaseSection from "../components/ShowcaseSlider";

export default function AboutPage() {
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
            In-Depth Case Studies
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
            Real Stories of Digital Transformation
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
            Dive into how we solved complex challenges for our clients.
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
            Request Consultation
          </motion.a>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="https://i.ibb.co/1GG477PH/Screen-7-Case-Studies.png"
          alt="Case Studies Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-10 text-left max-md:text-left">
            <h3 className="text-gray-400 uppercase tracking-wider text-sm">
              Case Studies
            </h3>
            <h2 className="text-2xl font-bold mt-2">
              How We Transform Businesses.
            </h2>
            <p className="text-gray-300 mt-4 max-w-3xl text-4xl max-md:text-base">
              Explore detailed accounts of our projects and the results they
              achieved.
            </p>
          </div>

          {/* Card 1*/}
          <div className="relative rounded-2xl mt-10 bg-black shadow-2xl p-6 md:p-10 min-h-[500px] flex flex-col justify-between">
            {/* Content */}
            <img
              src="https://i.ibb.co/HfxSWKvj/casestude-dd.png"
              className="absolute w-25 max-md:hidden ml-[55rem] top-10"
              alt="Case Study Visual"
            />

            <div className="flex-grow">
              <h3 className="text-4xl max-md:text-2xl font-semibold mb-3">
                Diztoversity Website Project
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl text-lg max-md:text-base">
                Developed a responsive, modern web platform for Diztoversity to
                establish a strong online presence and clearly communicate their
                brand mission, services, and engagement with their audience.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Challenge + Objective */}
                <div>
                  <h4 className="font-semibold mb-2 max-md:text-2xl text-3xl">
                    Challenge
                  </h4>
                  <p className="text-gray-300 text-md ml-4 max-md:text-base mb-4">
                    The client needed a clean, high-performance website that
                    balanced design appeal with usability — communicating the
                    brand message effectively across desktop and mobile while
                    staying fast and easy to maintain.
                  </p>

                  <h4 className="font-semibold max-md:text-2xl mb-2 text-3xl">
                    Objective & Actions
                  </h4>
                  <p className="text-gray-300 text-md ml-4 max-md:text-base">
                    Design and build a scalable, SEO-friendly, and responsive
                    website that showcases Diztoversity’s mission and services
                    with a seamless user experience.
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold mb-3 max-md:text-2xl text-3xl">
                    Results
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-md ml-2 max-md:text-sm">
                    <li>
                      Delivered a fully responsive site optimized for
                      performance and SEO.
                    </li>
                    <li>
                      Achieved smooth cross-device navigation and accessibility.
                    </li>
                    <li>Improved content presentation and visual hierarchy.</li>
                    <li>
                      Enhanced brand credibility through a modern, minimal
                      design.
                    </li>
                    <li>
                      Client satisfaction: “Working with Reavyn was a smooth and
                      professional experience. They turned our vision into a
                      beautiful, functional site.”
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2*/}
          <div className="relative rounded-2xl mt-10 bg-black shadow-2xl p-6 md:p-10 min-h-[500px] flex flex-col justify-between">
            {/* Content */}
            <img
              src="https://i.ibb.co/HfxSWKvj/casestude-dd.png"
              className="absolute w-25 max-md:hidden ml-[55rem] top-10"
              alt="Case Study Visual"
            />

            <div className="flex-grow">
              <h3 className="text-4xl max-md:text-2xl font-semibold mb-3">
                Hunk Toofan Website Project
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl text-lg max-md:text-base">
                Developed a professional and responsive website for Hunk Toofan
                to establish a strong digital presence and effectively showcase
                their offerings, story, and values.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Challenge + Objective */}
                <div>
                  <h4 className="font-semibold mb-2 max-md:text-2xl text-3xl">
                    Challenge
                  </h4>
                  <p className="text-gray-300 text-md ml-4 max-md:text-base mb-4">
                    The main challenge was creating a mobile-responsive,
                    fast-loading website that balanced design aesthetics with
                    usability, ensuring smooth performance across devices and
                    easy maintainability for future updates.
                  </p>

                  <h4 className="font-semibold max-md:text-2xl mb-2 text-3xl">
                    Objective & Actions
                  </h4>
                  <p className="text-gray-300 text-md ml-4 max-md:text-base">
                    Deliver a modern, performance-optimized website that
                    reflects the client’s identity, enhances user engagement,
                    and provides a seamless browsing experience across all
                    devices.",
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold mb-3 max-md:text-2xl text-3xl">
                    Results
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-md ml-2 max-md:text-sm">
                    <li>
                      Created a fully responsive and SEO-friendly website with
                      optimized performance.
                    </li>
                    <li>
                      Enhanced brand credibility through clean UI, intuitive
                      navigation, and professional layout.
                    </li>
                    <li>
                      Improved load time and reduced bounce rate on mobile
                      devices.
                    </li>
                    <li>
                      Delivered a user-friendly structure guiding visitors to
                      key actions like contact and services.
                    </li>
                    <li>
                      Client feedback: “Reavyn exceeded our expectations with a
                      modern, polished, and highly functional website.”
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3*/}
          <div className="relative rounded-2xl mt-10 bg-black shadow-2xl p-6 md:p-10 min-h-[500px] flex flex-col justify-between">
            {/* Content */}
            <img
              src="https://i.ibb.co/HfxSWKvj/casestude-dd.png"
              className="absolute w-25 max-md:hidden ml-[55rem] top-10"
              alt="Case Study Visual"
            />

            <div className="flex-grow">
              <h3 className="text-4xl max-md:text-2xl font-semibold mb-3">
                Medilife Health Care Website
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl text-lg max-md:text-base">
                Developed a clean, professional, and responsive website for
                Medilife Health Care to build credibility, clearly present their
                medical services, and improve global patient engagement.",
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Challenge + Objective */}
                <div>
                  <h4 className="font-semibold mb-2 max-md:text-2xl text-3xl">
                    Challenge
                  </h4>
                  <p className="text-gray-300 text-md ml-4 max-md:text-base mb-4">
                    The main challenge was to organize complex healthcare
                    information in a clear and trustworthy way while ensuring
                    strong performance, accessibility, and responsiveness across
                    all devices.",
                  </p>

                  <h4 className="font-semibold max-md:text-2xl mb-2 text-3xl">
                    Objective & Actions
                  </h4>
                  <p className="text-gray-300 text-md ml-4 max-md:text-base">
                    Create a fast-loading, SEO-friendly website that
                    communicates trust, simplifies navigation for users, and
                    allows the client to easily maintain and update content.",
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold mb-3 max-md:text-2xl text-3xl">
                    Results
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-md ml-2 max-md:text-sm">
                    <li>
                      Delivered a professional and credible healthcare website
                      aligned with the brand’s mission.
                    </li>
                    <li>
                      Improved performance and faster page load times for better
                      user experience.",
                    </li>
                    <li>
                      Enhanced accessibility and responsiveness across desktop,
                      tablet, and mobile.
                    </li>
                    <li>
                      Simplified user flow for contacting or locating services,
                      improving patient engagement.
                    </li>
                    <li>
                      Client feedback: “A professional, responsive, and
                      trustworthy website — it has already improved patient
                      engagement.”
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <ShowcaseSection />

      <section className="relative w-full py-16 px-6 text-center text-white bg-gradient-to-b from-[#0d0d0d] to-[#111]">
        <div className="max-w-4xl mx-auto">
          {/* Small Top Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl mb-1 max-md:text-xl font-bold text-gray-300"
          >
            Your Success Story Awaits
          </motion.p>

          {/* Big Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl max-md:text-4xl leading-snug mb-8"
          >
            Ready to see your project here?
          </motion.h2>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium 
                     bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </>
  );
}
