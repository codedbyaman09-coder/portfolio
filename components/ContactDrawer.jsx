"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { useSection } from "./SectionContext";

export default function ContactDrawer() {
  const { activeSection } = useSection();
  const isContactOpen = activeSection === "contact";

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-[#222222] z-[100] transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${isContactOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex flex-col items-center justify-start min-h-full w-full py-16 md:py-24 px-4 md:px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="font-playfair text-6xl md:text-8xl lg:text-[100px] font-bold text-gray-900 dark:text-white mb-20 text-center tracking-wide">
          Get In <span className="text-[var(--color-brand-yellow)] transition-colors duration-300">Touch</span>
        </h2>

        {/* Details Grid */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-16">
          <div className="bg-gray-100 dark:bg-[#333333] relative p-6 md:p-8 flex justify-center items-center min-h-[100px] md:min-h-[120px] rounded-sm">
            <div className="absolute -top-[25px] w-[50px] h-[50px] bg-[var(--color-brand-yellow)] rounded-full flex justify-center items-center text-white text-xl shadow-lg transition-colors duration-300">
              <FaPhoneAlt />
            </div>
            <span className="font-space-mono text-gray-900 dark:text-white text-[15px] font-bold tracking-widest text-center">+91 8356873389</span>
          </div>

          <div className="bg-gray-100 dark:bg-[#333333] relative p-6 md:p-8 flex justify-center items-center min-h-[100px] md:min-h-[120px] rounded-sm">
            <div className="absolute -top-[25px] w-[50px] h-[50px] bg-[var(--color-brand-yellow)] rounded-full flex justify-center items-center text-white text-xl shadow-lg transition-colors duration-300">
              <FaEnvelope />
            </div>
            <span className="font-space-mono text-gray-900 dark:text-white text-[13px] sm:text-[15px] font-bold tracking-widest text-center">codedbyaman09@gmail.com</span>
          </div>

          <div className="bg-gray-100 dark:bg-[#333333] relative p-6 md:p-8 flex justify-center items-center min-h-[100px] md:min-h-[120px] rounded-sm">
            <div className="absolute -top-[25px] w-[50px] h-[50px] bg-[var(--color-brand-yellow)] rounded-full flex flex-shrink-0 justify-center items-center text-white text-xl shadow-lg transition-colors duration-300">
              <FaMapMarkerAlt />
            </div>
            <span className="font-space-mono text-gray-900 dark:text-white text-[11px] sm:text-[12px] font-bold tracking-widest text-center leading-relaxed mt-4">749, OUTSIDE HAMLO KI BARI, SHREE VISHWAKARMA COLONY, BIKANER, CITY BIKANER, BIKANER, BIKANER, RAJASTHAN - 334001</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[800px] mx-auto h-[1px] bg-gray-300 dark:bg-[#444] opacity-50 mb-16"></div>

        {/* Bottom Section */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
            <h3 className="font-playfair text-3xl md:text-4xl text-gray-900 dark:text-white font-bold mb-6 tracking-wide">Send Me An Email</h3>
            <p className="font-space-mono text-gray-600 dark:text-[#a0a0a0] leading-[2.2] mb-12 text-[15px]">
              Let’s connect to discuss web development, UI/UX design, or full stack project opportunities. I’m a fresher developer passionate about building responsive, user-friendly, and scalable web applications.
            </p>

            <h3 className="font-playfair text-3xl md:text-4xl text-gray-900 dark:text-white font-bold mb-6 tracking-wide">Follow Me</h3>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="w-[45px] h-[45px] bg-gray-200 dark:bg-[#333333] hover:bg-[var(--color-brand-yellow)] text-gray-900 dark:text-white hover:text-white flex justify-center items-center rounded-full transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-[45px] h-[45px] bg-gray-200 dark:bg-[#333333] hover:bg-[var(--color-brand-yellow)] text-gray-900 dark:text-white hover:text-white flex justify-center items-center rounded-full transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-[45px] h-[45px] bg-gray-200 dark:bg-[#333333] hover:bg-[var(--color-brand-yellow)] text-gray-900 dark:text-white hover:text-white flex justify-center items-center rounded-full transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-[45px] h-[45px] bg-gray-200 dark:bg-[#333333] hover:bg-[var(--color-brand-yellow)] text-gray-900 dark:text-white hover:text-white flex justify-center items-center rounded-full transition-colors duration-300">
                <FaBehance />
              </a>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input type="text" placeholder="YOUR NAME" className="w-full bg-gray-100 dark:bg-[#333333] text-gray-900 dark:text-white font-space-mono text-[13px] font-bold px-4 py-4 md:px-6 md:py-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-yellow)] placeholder-gray-500 dark:placeholder-[#888] tracking-widest" />
              <input type="text" placeholder="SUBJECT" className="w-full bg-gray-100 dark:bg-[#333333] text-gray-900 dark:text-white font-space-mono text-[13px] font-bold px-4 py-4 md:px-6 md:py-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-yellow)] placeholder-gray-500 dark:placeholder-[#888] tracking-widest" />
              <input type="email" placeholder="YOUR EMAIL" className="w-full bg-gray-100 dark:bg-[#333333] text-gray-900 dark:text-white font-space-mono text-[13px] font-bold px-4 py-4 md:px-6 md:py-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-yellow)] placeholder-gray-500 dark:placeholder-[#888] tracking-widest" />
            </div>
            <textarea placeholder="YOUR MESSAGE" rows="8" className="w-full bg-gray-100 dark:bg-[#333333] text-gray-900 dark:text-white font-space-mono text-[13px] font-bold px-4 py-4 md:px-6 md:py-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-yellow)] placeholder-gray-500 dark:placeholder-[#888] resize-none tracking-widest"></textarea>

            <button className="font-space-mono bg-[var(--color-brand-yellow)] text-white font-bold text-[14px] px-8 py-4 uppercase tracking-wider transition-colors duration-300 hover:scale-105 transform cursor-pointer w-fit mt-2">
              SEND MESSAGE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
