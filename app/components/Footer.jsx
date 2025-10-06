import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaXing } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Reavyn</h2>
          <div className="w-10 h-10 bg- flex items-center justify-center rounded">
             <img src="https://i.ibb.co/VWDMqc8c/lgo.png" alt="" />
          </div>
        </div>

        {/* Explore Reavyn */}
        <div>
          <h3 className="text-white font-semibold mb-4">EXPLORE REAVYN</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Our Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">OUR SOLUTIONS</h3>
          <ul className="space-y-2 text-sm">
            <li>Custom Website & App Development</li>
            <li>AI Chatbots & Virtual Agents</li>
            <li>Workflow Automation & CRM</li>
            <li>SaaS Websites</li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-white font-semibold mb-4">GET INVOLVED</h3>
          <ul className="space-y-2 text-sm">
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Schedule a Consultation</li>
            <li>Bug Bounty</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="text-white font-semibold mb-4">STAY CONNECTED</h3>
          <ul className="space-y-2 text-sm">
            <li>Newsletter Signup</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© Reavyn 2025. All Rights Reserved</p>
        <div className="flex items-center space-x-6 max-md:space-x-2 mt-4 max-md:mt-3">
          <a href="/PrivacyPolicy" className=" hover:text-white">
            Privacy Policy
          </a>
          <a href="/TermsOfService" className="hover:text-white">
            Terms of Service
          </a>
          <div className="flex items-center space-x-4 ml-4">
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaXing />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
