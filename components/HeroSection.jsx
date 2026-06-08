"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
import { FaBirthdayCake, FaFlag, FaCog, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useSection } from "./SectionContext";
import ResumeSection from "./ResumeSection";
import SkillsSection from "./SkillsSection";

export default function HeroSection() {
  const { activeSection, setActiveSection } = useSection();
  const isAboutOpen = activeSection === "about";
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isDescOverflowing, setIsDescOverflowing] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      setIsDescOverflowing(descRef.current.scrollHeight > descRef.current.clientHeight);
    }
  }, [isAboutOpen]);

  const openAbout = () => {
    setActiveSection("about");
  };

  const closeAbout = () => {
    setActiveSection("");
  };

  return (
    <>
      <main className="relative z-10 flex flex-col items-start justify-center w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pb-40 md:pb-56 text-left h-screen">
        {/* Main Heading */}
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide drop-shadow-lg">
          <span className="text-white">Hi ! I’m </span>
          <span className="text-[var(--color-brand-yellow)] transition-colors duration-300">Aman Kulariya.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-space-mono text-white text-[12px] md:text-[14px] tracking-[0.15em] md:tracking-[0.2em] font-bold uppercase mb-8 drop-shadow-md text-left max-w-[800px] leading-relaxed">
          I'm a fresher full stack developer and UI/UX designer <br /> passionate about building modern web experiences.
        </p>

        {/* Button */}
        <button
          onClick={openAbout}
          className="font-space-mono border-2 border-[var(--color-brand-yellow)] bg-transparent text-white font-bold text-sm md:text-base px-8 py-4 uppercase tracking-wider transition-colors duration-300 hover:bg-[var(--color-brand-yellow)] hover:text-black transform cursor-pointer"
        >
          MORE ABOUT ME
        </button>
      </main>

      {/* About Me Sliding Page / Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-[#222222] z-[100] transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${isAboutOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center min-h-full w-full py-16 md:py-24 px-4 md:px-6 lg:px-12">

          {/* Section Title */}
          <h2 className="font-playfair text-5xl md:text-8xl lg:text-[100px] font-bold text-gray-900 dark:text-white mb-10 md:mb-24 text-center tracking-wide">
            About <span className="text-[var(--color-brand-yellow)] transition-colors duration-300">Me</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-6xl mx-auto gap-10 lg:gap-16">

            {/* Left: Image */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative w-full aspect-[4/5] border-[8px] md:border-[12px] border-gray-100 dark:border-[#333333] shadow-lg dark:shadow-2xl">
                <img
                  src="/images/aman.jpeg"
                  alt="Aman Kulariya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text & Details */}
            <div className="w-full lg:w-7/12 flex flex-col items-start justify-center text-left">
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Aman Kulariya</h3>
              <div className="w-full mb-8">
                <p
                  ref={descRef}
                  className={`font-space-mono text-gray-600 dark:text-[#a0a0a0] leading-[2.2] text-[15px] transition-all duration-300 ${!isDescExpanded ? "line-clamp-4 overflow-hidden" : ""}`}
                >
                  I’m Aman Kulariya, a fresher Full Stack / MERN Stack Developer from Bikaner, Rajasthan. I specialize in building responsive, user-friendly web applications using React.js, Tailwind CSS, Laravel, PHP, MySQL, and modern UI/UX design principles. I have hands-on experience in creating clean frontend interfaces, RESTful APIs, admin dashboards, authentication systems, and dynamic web applications. I’m passionate about learning new technologies and building scalable digital solutions.
                </p>
                {isDescOverflowing && (
                  <button
                    onClick={() => setIsDescExpanded(!isDescExpanded)}
                    className="mt-3 flex items-center text-[var(--color-brand-yellow)] font-space-mono text-[14px] font-bold tracking-wider hover:opacity-80 transition-opacity"
                  >
                    {isDescExpanded ? "READ LESS" : "READ MORE"}
                    <span className="ml-2 text-[10px]">{isDescExpanded ? "▲" : "▼"}</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6 w-full mb-8 md:mb-10 font-space-mono text-[14px] md:text-[14.5px]">

                {/* Row 1 */}
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaBirthdayCake className="mr-4 text-xl" />
                  <span className="mr-2">Birthdate :</span>
                  <span className="font-bold text-gray-900 dark:text-white tracking-wide">22/09/2003</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaPhoneAlt className="mr-4 text-xl" />
                  <span className="mr-2">Phone :</span>
                  <span className="font-bold text-gray-900 dark:text-white tracking-wide">8356873389</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaFlag className="mr-4 text-xl" />
                  <span className="mr-2">Nationality :</span>
                  <span className="font-bold text-gray-900 dark:text-white tracking-wide">Indian</span>
                </div>
                <div className="flex items-start text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="mr-4 text-xl mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="mr-2 mb-1">Address :</span>
                    <span className="font-bold text-gray-900 dark:text-white tracking-wide leading-[1.8] text-[12px] sm:text-[13px]"> OUTSIDE HAMLO KI BARI, SHREE VISHWAKARMA COLONY, BIKANER, CITY BIKANER, BIKANER, BIKANER, RAJASTHAN - 334001</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaCog className="mr-4 text-xl" />
                  <span className="mr-2">Experience :</span>
                  <span className="font-bold text-gray-900 dark:text-white tracking-wide">Fresher</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="mr-4 text-xl" />
                  <span className="mr-2">Email :</span>
                  <span className="font-bold text-gray-900 dark:text-white tracking-wide text-[13px] sm:text-[14.5px]">codedbyaman09@gmail.com</span>
                </div>

              </div>

              <a
                href="/images/Aman_Kulariya_Resume.pdf"
                download="Aman_Kulariya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono bg-[var(--color-brand-yellow)] text-white font-bold text-[14px] px-8 py-4 uppercase tracking-wider transition-colors duration-300 hover:scale-105 transform cursor-pointer inline-block w-fit"
              >
                DOWNLOAD MY CV
              </a>
            </div>

          </div>

          {/* Skills Section */}
          <SkillsSection />

          {/* Resume Section added below the About content */}
          <ResumeSection />

        </div>
      </div>
    </>
  );
}






