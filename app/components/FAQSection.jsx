 "use client";
import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      id: "01",
      question: "What tools do you use for development?",
      answer:
        "We use modern development tools including React, TypeScript, Node.js, and various cloud services to ensure high-quality, scalable solutions.",
    },
    {
      id: "02",
      question: "What services does Reavyn Tech Alliance offer?",
      answer:
        "We provide custom website and app development, e-commerce solutions, chatbots, workflow automation, SaaS platforms, mobile app development, CRM software, and automation tools tailored to your business needs.",
    },
    {
      id: "03",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      id: "04",
      question: "What tools do you use for development?",
      answer:
        "Our tech stack includes modern frameworks like React, Vue.js, Node.js, Python, cloud platforms like AWS and Azure, and industry-standard development tools for optimal performance and security.",
    },
    {
      id: "05",
      question: "How do you ensure project quality?",
      answer:
        "We follow rigorous quality assurance processes including code reviews, automated testing, user acceptance testing, and continuous integration/deployment practices to deliver reliable, high-quality solutions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-left">
           <h1 className="text-6xl max-md:text-4xl font-bold mb-4">FAQs</h1>
           <p className="text-gray-400 max-md:text-lg text-2xl">
             Find answers to common queries about our services and process
             <br />
             at Reavyn Tech Alliance.
           </p>
         </div>

        {/* Accordion List */}
        <div className="space-y-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                onClick={() => toggleAccordion(index)}
                className={`cursor-pointer transition-all duration-500 overflow-hidden 
                  ${isOpen ? "bg-[#111] rounded-xl p-6 shadow-lg" : "border-b border-gray-800 pb-4"}
                `}
              >
                {/* Accordion Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-gray-500 font-mono text-sm">{faq.id}</span>
                    <h3
                      className={`text-lg font-medium transition-colors ${
                        isOpen ? "text-white" : "hover:text-gray-300"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="ml-12 text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
