"use client"
import React from "react";

// components/CoreValues.js
// import { FaCogs, FaCheckCircle, FaUsers, FaShieldAlt } from "react-icons/fa";

export default function CoreValues() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/1GG477PH/Screen-7-Case-Studies.png')",
      }}
    >
      {/* Overlay for shadow effect */}
      <div className="absolute inset-0 bg"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center p-20 bg-black rounded-2xl text-white">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-wide mb-4">OUR CORE VALUES</h2>
        <p className="max-w-3xl mx-auto text-gray-200 mb-12">
          At Reavyn Tech Alliance, our values shape every project and interaction, 
          guiding us to deliver exceptional results while fostering a culture of 
          growth and trust.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Innovation */}
          <div className="bg-[#111]/90  p-6 text-left shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-left justify-left rounded-md mb-4">
              <img src="https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Pushing technological boundaries by embracing cutting-edge tools and 
              ideas to create forward-thinking solutions that redefine industries.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-[#111]/90  p-6 text-left shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-left justify-left rounded-md mb-4">
              <img src="https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Delivering flawless solutions through meticulous attention to detail, 
              rigorous testing, and a commitment to surpassing client expectations 
              every time.
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-[#111]/90  p-6 text-left shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-left justify-left rounded-md mb-4">
              <img src="https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Collaboration</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Partnering for success by working closely with clients and teams, 
              ensuring every voice is heard and every goal is achieved together.
            </p>
          </div>

          {/* Integrity */}
          <div className="bg-[#111]/90  p-6 text-left shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-left justify-left rounded-md mb-4">
              <img src="https://i.ibb.co/0yJW0yqw/Programming-Browser-1-Streamline-Ultimate-Regular-Free.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Transparent and ethical practices that build trust, maintaining honesty 
              and accountability in all our processes and relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

