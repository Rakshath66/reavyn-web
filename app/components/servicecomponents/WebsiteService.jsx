"use client";
import React from "react";
import { Terminal } from "lucide-react";

const WebsiteService = () => {
  const products = [
    {
      title: "E-commerce Platform for Retail Giant",
      description:
        "A responsive portfolio site built for a creative agency, increasing client engagement by 25% with a sleek, SEO-optimized design and seamless navigation.",
    },
    {
      title: "Custom Dashboard App for Logistics Firm",
      description:
        "A tailored dashboard application developed for a logistics company, improving operational efficiency by 30% with real-time tracking and analytics features.",
    },
    {
      title: "Portfolio Website for Creative Agency",
      description:
        "A strong e-commerce solution for a leading retail brand, using custom integrations to boost online sales by 40% with better user experience and simplified checkout.",
    },
  ];

  const products2 = [
    {
      title: "E-commerce Platform for Retail Giant",
      description:
        "A responsive portfolio site built for a creative agency, increasing client engagement by 25% with a sleek, SEO-optimized design and seamless navigation.",
    },
    {
      title: "Custom Dashboard App for Logistics Firm",
      description:
        "A tailored dashboard application developed for a logistics company, improving operational efficiency by 30% with real-time tracking and analytics features.",
    },
    {
      title: "Portfolio Website for Creative Agency",
      description:
        "A strong e-commerce solution for a leading retail brand, using custom integrations to boost online sales by 40% with better user experience and simplified checkout.",
    },
  ];

  const products3 = [
    {
      title: "E-commerce Platform for Retail Giant",
      description:
        "A responsive portfolio site built for a creative agency, increasing client engagement by 25% with a sleek, SEO-optimized design and seamless navigation.",
    },
    {
      title: "Custom Dashboard App for Logistics Firm",
      description:
        "A tailored dashboard application developed for a logistics company, improving operational efficiency by 30% with real-time tracking and analytics features.",
    },
    {
      title: "Portfolio Website for Creative Agency",
      description:
        "A strong e-commerce solution for a leading retail brand, using custom integrations to boost online sales by 40% with better user experience and simplified checkout.",
    },
  ];

  return (
    <>
      <section className="relative bg-[#151515] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 text-center max-md:text-left">
          <h2 className="text-5xl max-md:text-4xl  tracking-wider mb-4 ">
            WEBSITE DEVELOPMENT
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono text-xl max-md:text-base">
            We build and design responsive, search engine friendly websites with
            the finest technology. Whether it is a business website or a
            portfolio, we make your web presence quick, easy, and efficient.
          </p>
        </div>

        <div className="relative z-10 mt-12">
          <h3 className="text-4xl font-mono font-semibold mb-8">
            PRODUCTS DONE
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 text-black rounded-md mb-4">
                  <img
                    src="https://i.ibb.co/KpChHJ0p/Programming-Browser-1-Streamline-Ultimate-Regular-Free-1.png"
                    className="text-black"
                    alt=""
                  />
                </div>
                <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-xl mt-20 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#151515] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 text-center max-md:text-left">
          <h2 className="text-5xl max-md:text-4xl tracking-wider mb-4 ">
            E-COMMERCE WEBSITE DEVELOPMENT
          </h2>
          <p className="text-gray-300 max-w-5xl mx-auto leading-relaxed font-mono text-xl max-md:text-base">
            Launch and scale your Shopify store with our Shopify app
            development, custom themes, and integrations. We make your
            performance improved, conversions increased, and user experience
            incredible on Shopify.
          </p>
        </div>

        <div className="relative z-10 mt-12">
          <h3 className="text-4xl font-mono font-semibold mb-8">
            PRODUCTS DONE
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {products2.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 text-black rounded-md mb-4">
                  <img
                    src="https://i.ibb.co/KpChHJ0p/Programming-Browser-1-Streamline-Ultimate-Regular-Free-1.png"
                    className="text-black"
                    alt=""
                  />
                </div>
                <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-xl mt-20 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#151515] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 text-center max-md:text-left">
          <h2 className="text-5xl max-md:text-4xl tracking-wider mb-4 ">
            SHOPIFY DEVELOPMENT
          </h2>
          <p className="text-gray-300 max-w-5xl mx-auto leading-relaxed font-mono text-xl max-md:text-base">
            Launch and scale your Shopify store with our Shopify app
            development, custom themes, and integrations. We make your
            performance improved, conversions increased, and user experience
            incredible on Shopify.
          </p>
        </div>

        <div className="relative z-10 mt-12">
          <h3 className="text-4xl font-mono font-semibold mb-8">
            PRODUCTS DONE
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {products3.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 text-black rounded-md mb-4">
                  <img
                    src="https://i.ibb.co/KpChHJ0p/Programming-Browser-1-Streamline-Ultimate-Regular-Free-1.png"
                    className="text-black"
                    alt=""
                  />
                </div>
                <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-xl mt-20 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteService;
