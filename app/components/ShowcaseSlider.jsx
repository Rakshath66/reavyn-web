"use client";
import React, { useState } from "react";
import { Crosshair, Target, Box } from "lucide-react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    title: "SwiftCart - Custom E-Commerce Platform",
    industry: "Retail",
    description:
      "A custom Shopify overhaul with AI recommendations, redesigned UI via Figma, and built with React and Node.js for a seamless experience.",
    objective:
      "To enhance the e-commerce platform’s scalability and user engagement during peak seasons, we built a custom Shopify integration with AI-driven product recommendations and responsive UI/UX using Figma and React.",
    results: [
      "45% increase in online conversions within six months.",
      "Enhanced scalability to manage peak season traffic surges.",
      "Improved user engagement with personalized recommendations.",
      "Reduced cart abandonment by 20% through optimized checkout.",
      "Increased average order value by 15% with upselling features.",
    ],
    image: "https://i.ibb.co/5h4f6D7p/Data.png",
    result:
      "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
  {
    title: "SwiftHealth - Custom Healthcare Portal",
    industry: "Madical",
    description:
      "A secure and scalable healthcare management portal built with Next.js, ensuring HIPAA compliance and enhanced patient engagement.",
    objective:
      "Enable online appointment booking, secure medical records access, and AI-based health recommendations to improve patient care.",
    results: [
      "60% increase in online appointment bookings.",
      "Improved patient satisfaction scores by 30%.",
      "HIPAA-compliant data security features integrated.",
      "Automated reminders reduced no-shows by 25%.",
    ],
    image: "https://i.ibb.co/5h4f6D7p/Data.png",
    result:
      "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
];

export default function ShowcaseSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-left max-md:text-sm uppercase tracking-wide text-gray-500">
            Featured Projects
          </p>
          <h2 className="text-5xl max-md:text-4xl text-left font-bold mt-2">
            Showcase of Innovation
          </h2>
          <p className="text-gray-300 mt-4 max-w-3xl  text-left text-3xl max-md:text-xl">
            We take pride in delivering high-impact digital solutions, blending
            advanced development and design to redefine industry standards.
          </p>
        </div>

        {/* Card */}
        <div className="bg-green-100  max-md:h-[102rem] text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="absolute ">
            <h3 className="text-3xl max-md:text-2xl font-semibold">
              {projects[current].title}
            </h3>
            <p className="text-gray-600 mb-4">
              Client Industry: {projects[current].industry}
            </p>
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
                {projects[current].description}
              </p>

              <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                <Crosshair /> Objective
              </h4>
              <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                {projects[current].objective}
              </p>
            </div>
            <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
              <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                <Box /> Result
              </h4>
              <p className="ml-8">{projects[current].result}</p>
              <ul className="space-y-2 text-gray-800">
                {projects[current].results.map((result, idx) => (
                  <li key={idx} className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* See All */}
        <div className="text-left mt-6">
          <button className="bg-[#564AFF] cursor-pointer text-white px-6 py-2 rounded-lg  transition">
            See All →
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className=" flex justify-center cursor-pointer items-end text-right gap-6 -mt-10 ml-[60rem]  max-md:ml-[13rem]">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
