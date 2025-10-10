"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* Testimonials sample data - replace with your real content */
const testimonials = [
  {
    company: "Diztoversity",
    feedback:
      "They understood our vision and delivered a clean, responsive website that perfectly represents us.",
    author: "MOHD SAAD KHAN ",
    role: "CEO",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    company: "Hunk Toofan Project",
    feedback:
      "A modern, user-friendly site delivered on time — our customers love the smooth experience!",
    author: "Arpit Sonker",
    role: "Co-founder",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    company: "Medilife Health Care",
    feedback:
      "Professional, responsive, and trustworthy website — it has already improved patient engagement.",
    author: "Saif Malik",
    role: "CEO",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const logos = [
  { src: "https://i.ibb.co/HfxSWKvj/casestude-dd.png", alt: "Dupilo" },
  { src: "https://i.ibb.co/HfxSWKvj/casestude-dd.png", alt: "Dupilo" },
  { src: "https://i.ibb.co/HfxSWKvj/casestude-dd.png", alt: "Dupilo" },
  { src: "https://i.ibb.co/HfxSWKvj/casestude-dd.png", alt: "Dupilo" },
  { src: "https://i.ibb.co/HfxSWKvj/casestude-dd.png", alt: "Dupilo" },
];

export default function TestimonialsSection() {
  return (
    <>
      <section className="relative w-full min-h-screen pt-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: heading & description */}
          <div className="text-left -mt-80 max-md:-mt-2">
            <p className="text-gray-400 uppercase tracking-wider text-sm">
              Testimonials
            </p>
            <h2 className="text-3xl max-md:text-2xl font-bold mt-1">
              Voices of Success
            </h2>
          </div>

          <div className="absolute max-md:relative max-md:-ml-7">
            <p className="text-gray-300 mt-6 max-w-md text-3xl ml-6 max-md:text-3xl leading-relaxed">
              Hear from our clients about the transformative impact of Reavyn
              Tech Alliance’s development and design expertise.
            </p>
          </div>

          {/* RIGHT: Swiper slider */}
          <div className="relative max-md:overflow-hidden  ">
            <Swiper
              modules={[Navigation]}
              className="testimonials-swiper "
              spaceBetween={36}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 1.1, spaceBetween: 40 },
                1024: { slidesPerView: 1, spaceBetween: 60 },
              }}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx} className="flex justify-center">
                  {/* wrapper to create stacked layers behind the main card */}
                  <div className="relative flex justify-center items-center">
                    {/* back layers (stacked card effect) */}
                    <div
                      className="testimonial-layer absolute -left-8 -top-8 rounded-2xl"
                      style={{
                        width: "320px",
                        height: "380px",
                        background: "rgba(0,0,0,0.32)",
                        transform: "rotate(-2deg)",
                        zIndex: 1,
                      }}
                    />
                    <div
                      className="testimonial-layer absolute -left-4 -top-4 rounded-2xl"
                      style={{
                        width: "320px",
                        height: "380px",
                        background: "rgba(0,0,0,0.22)",
                        transform: "rotate(-1deg)",
                        zIndex: 2,
                      }}
                    />

                    {/* MAIN CARD */}
                    <div
                      className="card relative bg-white text-black rounded-2xl p-6"
                      style={{
                        width: "320px",
                        height: "380px",
                        zIndex: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-3xl font-semibold">{t.company}</h4>
                        <span className="text-6xl text-gray-300">”</span>
                      </div>

                      <p
                        className="text-gray-700 mt-10 text-md leading-relaxed mb-6"
                        style={{ maxHeight: 160, overflow: "hidden" }}
                      >
                        {t.feedback}
                      </p>

                      <div className="flex items-center gap-3 mt-12">
                        <img
                          src={t.avatar}
                          alt={t.author}
                          className="w-12 h-12 rounded-full border border-gray-200"
                        />
                        <div>
                          <div className="font-semibold">{t.author}</div>
                          <div className="text-sm text-gray-500">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Desktop arrows only */}
            <div className="max-md:relative z-10 flex gap-4 justify-center mt-6 max-md:mt-7 absolute left-1/2 -translate-x-1/2 w-full">
              <button className="testimonial-prev testimonial-nav-btn w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 bg-black/60 text-white hover:bg-gray-700 transition">
                <FaArrowLeft />
              </button>
              <button className="testimonial-next testimonial-nav-btn w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 bg-black/60 text-white hover:bg-gray-700 transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full -mt-20 max-md:relative bg-black py-10 overflow-hidden">
        <div className="relative flex w-full overflow-hidden">
         
          <div className="flex animate-marquee space-x-20">
            {logos.concat(logos).map((logo, idx) => (
              <div
                key={idx}
                className="flex "
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

     
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}
