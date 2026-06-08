"use client";

import React from "react";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "JAVASCRIPT", percentage: 85 },
    { name: "LARAVEL", percentage: 75 },
    { name: "TYPESCRIPT", percentage: 80 },
    { name: "TAILWIND CSS", percentage: 90 },
    { name: "REACT", percentage: 85 },
    { name: "NODE.JS", percentage: 80 },
    { name: "MYSQL", percentage: 70 },
    { name: "MONGODB", percentage: 75 },
    { name: "EXPRESS", percentage: 80 },
  ];

  return (
    <div className="w-full mt-24 md:mt-32 max-w-[1200px] mx-auto flex flex-col items-start px-4 md:px-6 lg:px-0">
      <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16 tracking-wide">
        My Skills
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">
        {skills.map((skill, index) => (
          <div key={index} className="w-full flex flex-col relative">
            <h3 className="font-space-mono text-gray-900 dark:text-white text-[15px] font-bold tracking-widest uppercase mb-4">
              {skill.name}
            </h3>

            <div className="relative w-full h-[4px] bg-gray-300 dark:bg-[#333333] mt-5 rounded-full">
              {/* Tooltip */}
              <div
                className="absolute -top-[36px] -translate-x-1/2 bg-[var(--color-brand-yellow)] text-white font-space-mono text-[13px] font-bold px-[8px] py-[3px] rounded-[3px] transition-colors duration-300 flex justify-center items-center shadow-md"
                style={{ left: `${skill.percentage}%` }}
              >
                {skill.percentage}%
                {/* Downward Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[var(--color-brand-yellow)] transition-colors duration-300"></div>
              </div>

              {/* Filled progress */}
              <div
                className="h-full bg-[var(--color-brand-yellow)] transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
