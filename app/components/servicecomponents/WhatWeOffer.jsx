"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WhatWeOffer = () => {
  const offers = [
    "Tailored web and app solutions",
    "Responsive design",
    "Cross-platform compatibility",
    "Ongoing maintenance & support",
  ];

  const process = [
    {
      title: "Discovery",
      desc: "Researching user needs with Figma wireframes.",
    },
    {
      title: "Design",
      desc: "Crafting UI/UX with Figma and usability testing.",
    },
    {
      title: "Development",
      desc: "Coding with React and Node.js.",
    },
    {
      title: "Testing",
      desc: "Validating with Selenium and Postman.",
    },
    {
      title: "Launch & Support",
      desc: "Deploying with AWS and providing updates.",
    },
  ];

  return (
    <section
      className="relative text-white py-20 px-6 mx-auto bg-[#0A0612] max-md:px-12 max-lg:px-24">
        <img src="https://i.ibb.co/H1Pxy0T/Frame-249.png" className="absolute -mt-20 w-full -mx-10" alt="" />
         <img src="https://i.ibb.co/H1Pxy0T/Frame-249.png" className="absolute  mt-[30rem] w-full -mx-10" alt="" />
      {/* Container */}
      <div className="bg-black/90 z-auto mx-auto rounded-3xl p-10 md:p-16 shadow-lg backdrop-blur-sm">
        {/* WHAT WE OFFER */}
        <h2 className="text-5xl max-md:text-3xl max-md:-ml-10 text-left font-mono mb-8">
          WHAT WE OFFER (TBD)
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {offers.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-lg p-[2px] max-md:-mx-10 transition-all duration-500"
            >
              {/* Gradient Border */}
              <div
                className="
                  absolute inset-0 blur-lg transition duration-400
                  bg-gradient-to-r from-[#7855ff] via-[#e682df] via-[#000000] via-[#265cde] to-[#0dd3a3]
                  opacity-100 sm:opacity-0 group-hover:opacity-100
                "
              />

              {/* Card Content */}
              <div className="relative z-10 bg-[#0F0F0F] flex cursor-pointer justify-center items-start p-5 ">
                <Check size={24} className="text-white mb-" />
                <span className="font-mono text-sm ml-2 max-md:text-base">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* OUR PROCESS */}
        <h3 className="text-4xl font-mono max-md:-ml-10  my-15">OUR PROCESS</h3>

         <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {process.map((step, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative group rounded-xl text-left p-[2px] max-md:-mx-10 transition-all duration-500"
        >
          {/* Gradient Border — visible always on mobile, hover on desktop */}
          <div
            className="
              absolute inset-0 rounded-xl blur-lg
              bg-gradient-to-r from-[#7855ff] via-[#e682df] via-[#265cde] to-[#0dd3a3]
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              transition-all duration-500
            "
          />

          {/* Card Content */}
          <div className="relative z-10 bg-black cursor-pointer flex flex-col justify-center p-6 h-32 max-md:h-44 max-lg:h-48">
            <h4 className="font-semibold text-xl max-md:text-xl max-lg:text-xl mb-2 text-white">
              {step.title}
            </h4>
            <p className="text-gray-400 text-sm max-md:text-lg leading-relaxed">
              {step.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r bg-[#7855ff] text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
            Get a Quote →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
