"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Crosshair, Target, Box } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import Service2 from "../components/servicecomponents/Service2";
import WhyChooseUs from "../components/servicecomponents/WhyChooseUs";
import CaseStudySlider from "../components/CaseStudySlider";
import CTASection from "../components/CTASection";
import WebsiteService from "../components/servicecomponents/WebsiteService";
import WhatWeOffer from "../components/servicecomponents/WhatWeOffer";
import TeamSection from "../components/aboutcomponents/TeamSection";
import CoreValues from "../components/aboutcomponents/CoreValues";
import ShowcaseSection from "../components/ShowcaseSlider";

const projects = [
  {
   
    image: "https://i.ibb.co/5h4f6D7p/Data.png",
    result:
      "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
  {
    
    image: "https://i.ibb.co/5h4f6D7p/Data.png",
    result:
      "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
];

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

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
            Our Portfolio of Excellence 
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
            Explore the innovative projects that define Reavyn
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
            From AI integrations to custom apps, see how we deliver results.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
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
            Request a Strategy
          </motion.a>
        </div>
      </section>

      <ShowcaseSection />

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <p className="text-gray-400 text-base mb-1">
            Designed to the last detail.
          </p>
          <h2 className="text-2xl max-md:text-4xl font-bold mb-6">
            Full Project Gallery
          </h2>
          <p className="max-w-4xl  text-4xl text-gray-200 mb-12">
            Explore our collection of digital solutions — a fusion of
            cutting-edge development and refined design, each crafted to elevate
            standards and inspire progress.
          </p>

          {/* Project Card */}
          <div className="bg-[#8EADD5]  max-md:h-[102rem] text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                SwiftCart - Custom E-Commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">Client Industry: Retail</p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-28 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-10">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  A custom Shopify overhaul with AI recommendations, redesigned
                  UI via Figma, and built with React and Node.js for a seamless
                  experience.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  To enhance the e-commerce platform’s scalability and user
                  engagement during peak seasons, we built a custom Shopify
                  integration with AI-driven product recommendations and
                  responsive UI/UX using Figma and React.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                <p className="ml-8">{projects[current].result}</p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      45% increase in online conversions within six months.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Enhanced scalability to manage peak season traffic surges.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Improved user engagement with personalized
                      recommendations.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Reduced cart abandonment by 20% through optimized
                      checkout.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Increased average order value by 15% with upselling
                      features.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#D4FFE6] max-md:h-[102rem] mt-10 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                SwiftCart - Custom E-Commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">Client Industry: Retail</p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-28 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-10">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  A custom Shopify overhaul with AI recommendations, redesigned
                  UI via Figma, and built with React and Node.js for a seamless
                  experience.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  To enhance the e-commerce platform’s scalability and user
                  engagement during peak seasons, we built a custom Shopify
                  integration with AI-driven product recommendations and
                  responsive UI/UX using Figma and React.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                <p className="ml-8">{projects[current].result}</p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      45% increase in online conversions within six months.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Enhanced scalability to manage peak season traffic surges.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Improved user engagement with personalized
                      recommendations.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Reduced cart abandonment by 20% through optimized
                      checkout.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Increased average order value by 15% with upselling
                      features.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#FBBEF8]  max-md:h-[102rem] mt-10 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                SwiftCart - Custom E-Commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">Client Industry: Retail</p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-28 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-10">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  A custom Shopify overhaul with AI recommendations, redesigned
                  UI via Figma, and built with React and Node.js for a seamless
                  experience.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  To enhance the e-commerce platform’s scalability and user
                  engagement during peak seasons, we built a custom Shopify
                  integration with AI-driven product recommendations and
                  responsive UI/UX using Figma and React.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                <p className="ml-8">{projects[current].result}</p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      45% increase in online conversions within six months.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Enhanced scalability to manage peak season traffic surges.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Improved user engagement with personalized
                      recommendations.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Reduced cart abandonment by 20% through optimized
                      checkout.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>
                      Increased average order value by 15% with upselling
                      features.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CaseStudySlider />

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
            Inspired? Let's Collaborate
          </motion.p>

          {/* Big Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl max-md:text-4xl leading-snug mb-8"
          >
            Bring your vision to life with our expertise.
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
            Discuss Project
          </motion.a>
        </div>
      </section>
    </>
  );
}
