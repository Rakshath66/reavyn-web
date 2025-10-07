"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    title: "Diztoversity Website Project",
    description:
      "Developed a responsive, modern web platform for Diztoversity to establish a strong online presence and clearly communicate their brand mission, services, and engagement with their audience.",
    challenge:
      "The client needed a clean, high-performance website that balanced design appeal with usability — communicating the brand message effectively across desktop and mobile while staying fast and easy to maintain.",
    objective:
      "Design and build a scalable, SEO-friendly, and responsive website that showcases Diztoversity’s mission and services with a seamless user experience.",
    results: [
      "Delivered a fully responsive site optimized for performance and SEO.",
      "Achieved smooth cross-device navigation and accessibility.",
      "Improved content presentation and visual hierarchy.",
      "Enhanced brand credibility through a modern, minimal design.",
      "Client satisfaction: “Working with Reavyn was a smooth and professional experience. They turned our vision into a beautiful, functional site.”",
    ],
  },
  {
    title: "Hunk Toofan Website Project",
    description:
      "Developed a professional and responsive website for Hunk Toofan to establish a strong digital presence and effectively showcase their offerings, story, and values.",
    challenge:
      "The main challenge was creating a mobile-responsive, fast-loading website that balanced design aesthetics with usability, ensuring smooth performance across devices and easy maintainability for future updates.",
    objective:
      "Deliver a modern, performance-optimized website that reflects the client’s identity, enhances user engagement, and provides a seamless browsing experience across all devices.",
    results: [
      "Created a fully responsive and SEO-friendly website with optimized performance.",
      "Enhanced brand credibility through clean UI, intuitive navigation, and professional layout.",
      "Improved load time and reduced bounce rate on mobile devices.",
      "Delivered a user-friendly structure guiding visitors to key actions like contact and services.",
      "Client feedback: “Reavyn exceeded our expectations with a modern, polished, and highly functional website.”",
    ],
  },
  {
    title: "Medilife Health Care Website",
    description:
      "Developed a clean, professional, and responsive website for Medilife Health Care to build credibility, clearly present their medical services, and improve global patient engagement.",
    challenge:
      "The main challenge was to organize complex healthcare information in a clear and trustworthy way while ensuring strong performance, accessibility, and responsiveness across all devices.",
    objective:
      "Create a fast-loading, SEO-friendly website that communicates trust, simplifies navigation for users, and allows the client to easily maintain and update content.",
    results: [
      "Delivered a professional and credible healthcare website aligned with the brand’s mission.",
      "Improved performance and faster page load times for better user experience.",
      "Enhanced accessibility and responsiveness across desktop, tablet, and mobile.",
      "Simplified user flow for contacting or locating services, improving patient engagement.",
      "Client feedback: “A professional, responsive, and trustworthy website — it has already improved patient engagement.”",
    ],
  },
];

export default function CaseStudySlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
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
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            How We Transform Businesses.
          </h2>
          <p className="text-gray-300 mt-4 max-w-3xl text-xl max-md:text-base">
            Explore detailed accounts of our projects and the results they
            achieved.
          </p>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl bg-black/80 backdrop-blur-md shadow-2xl p-6 md:p-10 min-h-[600px] flex flex-col justify-between">
          {/* Content */}
          <img
            src="https://i.ibb.co/HfxSWKvj/casestude-dd.png"
            className="absolute w-25 max-md:hidden ml-[55rem]"
            alt=""
          />
          <div className="flex-grow">
            <h3 className="text-4xl max-md:text-2xl font-semibold mb-3">
              {caseStudies[current].title}
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl text-lg max-md:text-base">
              {caseStudies[current].description}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Challenge + Objective */}
              <div>
                <h4 className="font-semibold mb-2 max-md:text-2xl text-3xl">
                  Challenge
                </h4>
                <p className="text-gray-300 text-md ml-4 max-md:text-base mb-4">
                  {caseStudies[current].challenge}
                </p>

                <h4 className="font-semibold max-md:text-2xl mb-2 text-3xl">
                  Objective & Actions
                </h4>
                <p className="text-gray-300 text-md ml-4 max-md:text-base">
                  {caseStudies[current].objective}
                </p>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-semibold mb-3 max-md:text-2xl text-3xl">
                  Results
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-md ml-2 max-md:text-sm ">
                  {caseStudies[current].results.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
            <a
              href="/casestudies"
              className="bg-[#564AFF] max-md:text-center text-white px-6 py-3 rounded-lg hover:bg-[#564AFF] cursor-pointer transition w-full md:w-auto shadow-lg"
            >
              Explore All →
            </a>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition shadow-lg"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition shadow-lg"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
