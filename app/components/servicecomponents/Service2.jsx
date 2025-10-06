"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "Custom Website & App Development",
    description:
      "We craft scalable websites and apps tailored to your vision, from startups to enterprises.",
  },
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "E-Commerce & Shopify Solutions",
    description:
      "Boost your online sales with custom e-commerce platforms and Shopify integrations.",
  },
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "AI Chatbots & Smart Virtual Agents",
    description:
      "Enhance customer support with intelligent, 24/7 AI-powered chatbots.",
  },
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "Workflow Automation & CRM Systems",
    description:
      "Streamline operations with bespoke automation and CRM solutions.",
  },
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "SaaS Websites",
    description:
      "Build conversion-focused SaaS platforms for B2B founders and product teams.",
  },
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "App Development (Android/iOS)",
    description:
      "Create robust mobile apps for startups and enterprises alike.",
  },
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "Customized CRM Software",
    description: "Modernize your business with personalized CRM platforms.",
  },
  {
    imgg: "https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png",
    // link: "/",
    title: "Automation Solutions",
    description:
      "Save time and reduce errors with tailored workflow automation.",
  },
];

const Service2 = () => {
  return (
    <section
      className="relative text-white py-20 px-6 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/nN3dMctB/Screen-3-About-Us-4x-bg-1.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Top Decorative Background (Behind Heading) */}
      <div
        className="absolute top-0 left-0 w-full h-64 bg-no-repeat bg-center bg-contain opacity-60"
        style={{
          backgroundImage: "url('https://i.ibb.co/hxMWr366/Group-7.png')",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-12">
          <h4 className="text-gray-300 mb-2">What We Offer</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Expertise in Action
          </h2>
          <p className="text-gray-400 max-w-5xl">
            At Reavyn Tech Alliance, we deliver a suite of advanced development
            and design services tailored to elevate your business. From
            AI-driven innovations to seamless app creation, our team combines
            technical mastery with strategic insight to build solutions that
            stand the test of time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-lg text-left p-[2px] transition-all duration-500"
            >
              {/* Gradient Border */}
              <div
                className={`
          absolute inset-0 blur-lg transition duration-400
          bg-gradient-to-r from-[#7855ff] via-[#e682df] via-[#000000] via-[#265cde] to-[#0dd3a3]
          opacity-100 sm:opacity-0 group-hover:opacity-100
        `}
              />

              {/* Card Content */}
              <div className="relative z-10 bg-black aspect-square cursor-pointer flex flex-col justify-center items-left p-6 text-left group-hover:border-transparent">
                <div>
                  <img src={service.imgg} className="mb-4 w-14 h-14" alt="" />
                  <h3 className="font-semibold text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-lg">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section with Decorative Background */}
        <div
          className="relative text-center max-md:text-left max-md:-mt-4 py-12 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: "url('https://i.ibb.co/hxMWr366/Group-7.png')",
          }}
        >
          <p className="text-lg mb-4">
            Ready to elevate your business with our tech expertise?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-2 border border-blue-500 rounded-lg text-white hover:bg-blue-600 hover:border-blue-600 transition"
          >
            Discuss →
          </motion.a>
          <p className="text-gray-400 mt-4">
            Contact Us and let’s start crafting your future today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service2;
