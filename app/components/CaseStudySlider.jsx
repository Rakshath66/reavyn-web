"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    title: "EduBot Deployment for Education",
    description:
      "This initiative involved creating a smart virtual agent tailored to handle common student inquiries, featuring natural language processing and a sleek, accessible design, built to enhance engagement across multiple devices.",
    challenge:
      "To streamline support and improve student experience, we developed a 24/7 AI chatbot using Python and Dialogflow, integrated with their existing CRM, and designed an intuitive interface with Adobe XD.",
    objective:
      "Deliver a student-first AI chatbot to enhance learning accessibility and automate repetitive queries.",
    results: [
      "Reduced support queries by 40% within three months.",
      "Increased student satisfaction scores by 25%.",
      "Decreased operational costs by 15%.",
      "Enabled 24/7 availability, supporting global student access.",
      "Improved data collection for personalized follow-ups.",
    ],
  },
  {
    title: "FinBot for Banking Support",
    description:
      "We built a financial assistant chatbot for a leading bank to handle routine customer queries, enable seamless transactions, and reduce call center load.",
    challenge:
      "Banks faced high call center volumes and long wait times. We developed a chatbot to provide instant responses and automate common banking queries.",
    objective:
      "Deliver a secure, responsive, and customer-friendly AI chatbot that integrates with banking APIs for account and transaction inquiries.",
    results: [
      "30% reduction in call center workload.",
      "Increased self-service adoption by 50%.",
      "Improved transaction turnaround time by 40%.",
      "Enhanced customer experience with 24/7 support.",
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
            Showcase of Innovation
          </h2>
          <p className="text-gray-300 mt-4 max-w-3xl text-xl max-md:text-base">
            Discover how Reavyn Tech Alliance has transformed challenges into
            triumphs with cutting-edge development and design solutions.
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
                <h4 className="font-semibold mb-2 max-md:text-2xl text-3xl">Challenge</h4>
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
                <h4 className="font-semibold mb-3 max-md:text-2xl text-3xl">Results</h4>
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
            <button className="bg-[#564AFF] text-white px-6 py-2 rounded-lg hover:bg-[#564AFF] cursor-pointer transition w-full md:w-auto shadow-lg">
              Explore All →
            </button>

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
