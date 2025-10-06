"use client";
import React from "react";

const steps = [
  {
    imgb: "https://i.ibb.co/395f4JZK/Frame-169.png",
    title: "DISCOVERY",
    subtitle: "Putting Research in Order",
    image: "https://i.ibb.co/B20C5xV5/Our-Process-2.png",
    discription: "We start with thorough research and analysis using Jira, Figma, and AI tools like TensorFlow to define a strategic project roadmap.",
  },
  {
    imgb: "https://i.ibb.co/QvN8c0rF/Frame-169-1.png",
    title: "DESIGN",
    subtitle: "Shaping Intuitive Solutions",
    image: "https://i.ibb.co/B20C5xV5/Our-Process-2.png",
    discription: "Our UI/UX team crafts prototypes in Figma and Adobe XD, ensuring user-centric designs with usability testing via Lookback.",
  },
  {
    imgb: "https://i.ibb.co/RTKNx7Wg/Frame-169-2.png",
    title: "DEVELOPMENT",
    subtitle: "Constructing Robust Systems",
    image: "https://i.ibb.co/B20C5xV5/Our-Process-2.png",
    discription: "We build scalable systems with React, Node.js, and Docker, using Git and Jenkins for agile development and AI integration via PyTorch.",
  },
  {
    imgb: "https://i.ibb.co/5pP8LbB/Frame-169-3.png",
    title: "TESTING",
    subtitle: "Validating Excellence",
    image: "https://i.ibb.co/B20C5xV5/Our-Process-2.png",
    discription: "We test with Selenium, Postman, and JMeter, ensuring performance and security compliance with OWASP standards.",
  },
  {
    imgb: "https://i.ibb.co/pBh8tZyP/Frame-169-4.png",
    title: "LAUNCH",
    subtitle: "Ensuring Long-Term Success & Support",
    image: "https://i.ibb.co/B20C5xV5/Our-Process-2.png",
    discription: "We launch with Kubernetes and Terraform, offering ongoing support via Zendesk and New Relic for optimization.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-black text-white py-20 h-[197rem] max-md:h0rem] px-20 relative">
      <div className="max-w-7xl mx-auto max-md:-ml-12">
        {/* Header */}
        <div className="text-center max-md:text-left mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-400">
            The Process of Our Proven Methodology
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            How We Build Your Future
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            At Reown Tech Alliance, our process is a structured approach to
            excellence, seamlessly integrating advanced development methods to
            deliver robust, tailored solutions for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-28 relative  -mb-[20rem] z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 -mt-[18rem]  max-md:mt-8 max-md:-mb-20 items-center"
            >
              {/* LEFT SIDE TITLE + SUBTITLE */}
              <div className="flex flex-col space-y-3">
                {/* <div className="h-2 w-10 bg-white mb-2"></div> */}
                <img
                  src={step.imgb}
                  className="h-4 max-w-[70px] bg-white mb-2"
                  alt=""
                />
                <h3 className="text-5xl max-md:text-4xl  font-bold">{step.title}</h3>
                <p className="text-purple-400 font-medium text-xl ">
                  {step.subtitle}
                </p>
              </div>

              {/* RIGHT SIDE BIG IMAGE */}
              <div className="w-[75rem] -ml-[40rem] max-md:w-[43rem] max-md:-ml-[24rem] max-md:-mt-32 ">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto rounded-xl  overflow-hidden shadow-lg"
                />
                <p className="absolute text-4xl max-md:text-lg w-[390px] max-md:w-[230px]  ml-[47rem] max-md:ml-[27rem] -mt-[25rem] max-md:-mt-[15rem] ">{step.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow Effect */}
      {/* <div className="absolute inset-0 -z-0">
        <div className="w-[500px] max-md:w-[350px] h-[600px] bg-purple-700/20 blur-[200px] rounded-full absolute top-20 left-10"></div>
        <div className="w-[400px] max-md:w-[250px] h-[650px] bg-purple-500/10 blur-[180px] rounded-full absolute bottom-10 right-10"></div>
      </div> */}
    </section>
  );
};

export default ProcessSection;
