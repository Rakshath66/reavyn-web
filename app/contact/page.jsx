"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import WhyChooseUs from "../components/servicecomponents/WhyChooseUs";

const ContactSection = () => {
  const canvasRef = useRef(null);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [popup, setPopup] = useState(false);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // 🎨 Background Canvas Animation (Fixed)
  useEffect(() => {
    const t = setTimeout(() => setContentLoaded(true), 400);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.06)";
        ctx.fill();
        dot.x += dot.dx;
        dot.y += dot.dy;
        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      });
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // 📝 Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 🚀 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setPopup(true);
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      alert(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 py-20">
        {/* 🟣 Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Contact Form Content */}
        <div className="relative z-10 pt-20 w-full max-w-3xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-white text-black rounded-full text-base font-medium shadow-md">
              Reach out for consultations or inquiries.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl max-md:text-5xl leading-tight"
          >
            Connect with Reavyn<span className="block"> Tech Alliance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: contentLoaded ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 -mt-6 text-lg"
          >
            Let&apos;s Discuss Your Project
          </motion.p>

          {/* 📨 Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 30,
            }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#756BFF] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#756BFF] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Service Interest (Optional)
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-3 text-gray-400 focus:outline-none focus:border-[#756BFF] transition-all"
              >
                <option value="">Select</option>
                <option value="custom web">Custom Website</option>
                <option value="app">App Development (Android/iOS)</option>
                <option value="e-commerce">E-Commerce</option>
                <option value="shopify">Shopify Solutions</option>
                <option value="chatbots">AI Chatbots</option>
                <option value="workflow">Workflow Automation</option>
                <option value="saas">CRM SaaS Websites</option>
                <option value="crm">Customized CRM</option>
                <option value="automation">Automation Solutions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#756BFF] transition-all"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
              <p className="text-sm text-gray-500">
                Your information is secure and will only be used to respond to
                your inquiry.
              </p>
              <motion.button
                type="submit"
                whileHover={{ scale: sending ? 1 : 1.05 }}
                whileTap={{ scale: sending ? 1 : 0.95 }}
                disabled={sending}
                className={`bg-gradient-to-r from-[#756BFF] to-[#564AFF] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 ${
                  sending ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {sending ? "Sending..." : "Send Message →"}
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* ✅ Success Popup */}
        <AnimatePresence>
          {popup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <CheckCircle className="text-green-500 w-16 h-16" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="text-gray-700">
                    Thank you for reaching out. We’ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setPopup(false)}
                    className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* WhyChooseUs Section */}
      <WhyChooseUs />
    </>
  );
};

export default ContactSection;
