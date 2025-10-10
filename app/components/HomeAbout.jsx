"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section
      className="relative text-white py-16 px-6 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/tT3mJkQC/2x-1.png')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Heading */}
        <motion.h4
          className="text-gray-300 text-3xl max-md:text-xl mb-2"
          variants={fadeInUp}
        >
          About Us
        </motion.h4>

        <motion.h2
          className="text-5xl max-md:text-3xl font-bold mb-8"
          variants={fadeInUp}
        >
          The Reavyn Story
        </motion.h2>

        {/* Main Text */}
        <motion.h3
          className="text-4xl max-w-4xl max-md:text-xl font-medium mb-6 leading-snug"
          variants={fadeInUp}
        >
          We are{" "}
          <span className="text-white font-black">
            Reavyn, a passionate team of innovators, developers, and strategists united by a love for technology.
          </span>
        </motion.h3>

        {/* Two-Column Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 text-gray-300"
          variants={fadeInUp}
        >
          <p className="w-80 text-xl max-md:text-sm max-md:w-60">
            We’re your global tech allies, driven by a mission to empower 
            startups, enterprises, and entrepreneurs with cutting-edge solutions.
          </p>
          <p className="w-[26rem] text-xl  max-md:text-sm max-md:w-60">
            Based in a global network, we bring together diverse talents to turn 
            your ideas into reality, blending AI expertise with creative problem-solving 
            to shape the future of digital experiences.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
