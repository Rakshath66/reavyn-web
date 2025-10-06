"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Sample team data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    experience: "10+ Years in AI & App Development",
    img: "https://i.ibb.co/vCpJBYWh/ec78deaf55a95e5b08b8f1507c5090f8573e7b45.jpg",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    experience: "8+ years crafting intuitive and visually stunning designs.",
    img: "https://i.ibb.co/vCpJBYWh/ec78deaf55a95e5b08b8f1507c5090f8573e7b45.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "Senior Software Engineer",
    experience: "12+ years specializing in cloud solutions and Node.js development.",
    img: "https://i.ibb.co/vCpJBYWh/ec78deaf55a95e5b08b8f1507c5090f8573e7b45.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Project Strategist",
    experience: "7+ years leading digital transformation projects.",
    img: "https://i.ibb.co/vCpJBYWh/ec78deaf55a95e5b08b8f1507c5090f8573e7b45.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        {/* Left Text Section */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-5xl max-md:text-4xl mb-3">Our Team</h2>
          <p className="text-gray-300 text-xl mb-6">
            Meet the builders and designers behind Reavyn.
          </p>
          <div className="flex gap-3">
            <button className="team-prev bg-white text-black p-3 rounded-full hover:bg-gray-200 transition">
              <FaArrowLeft />
            </button>
            <button className="team-next bg-white text-black p-3 rounded-full hover:bg-gray-200 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="md:w-3/4 w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".team-next",
              prevEl: ".team-prev",
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black h-[310px] rounded-2xl p-5  shadow-md hover:shadow-lg transition">
                  <div className="flex flex-col items-start">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-3xl">{member.name}</h3>
                    <p className="text-lg text-gray-600 mb-7">{member.role}</p>
                    <p className="text-sm text-gray-800 mb-4">{member.experience}</p>
                    <div className="flex gap-3 text-gray-700 text-lg">
                      <FaLinkedinIn size={32} className="hover:text-blue-600 cursor-pointer" />
                      <FaInstagram size={32} className="hover:text-pink-500 cursor-pointer" />
                      <FaXTwitter size={32} className="hover:text-black cursor-pointer" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
