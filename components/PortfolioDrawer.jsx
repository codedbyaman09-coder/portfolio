"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useSection } from "./SectionContext";

export default function PortfolioDrawer() {
  const { activeSection } = useSection();
  const isPortfolioOpen = activeSection === "portfolio";

  const projects = [
    {
      id: 1,
      title: "School Management",
      desc: "A comprehensive school management system designed to streamline administrative tasks. It manages students, teachers, classes, and more efficiently.",
      github: "https://github.com/codedbyaman09-coder/school-management",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/images/school managment.png"
    },
    {
      id: 2,
      title: "Manak Paan Palace",
      desc: "A modern web application built for Manak Paan Palace. Showcasing products and services with an interactive and highly responsive UI.",
      github: "https://github.com/codedbyaman09-coder/manak-paan-palace",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/images/Manak Paan Palace.png"
    }
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-[#222222] z-[100] transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${isPortfolioOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex flex-col items-center justify-start min-h-full w-full py-16 md:py-24 px-4 md:px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="font-playfair text-5xl md:text-8xl lg:text-[100px] font-bold text-gray-900 dark:text-white mb-12 md:mb-20 text-center tracking-wide">
          My <span className="text-[var(--color-brand-yellow)] transition-colors duration-300">Portfolio</span>
        </h2>

        {/* Projects Grid */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {projects.map(project => (
            <article key={project.id} className="w-full flex">
              <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-[#f8f9fa] dark:bg-[#333333] flex flex-col overflow-hidden shadow-md dark:shadow-2xl transition-transform duration-300 hover:-translate-y-2 group cursor-pointer block rounded-sm"
            >
              {/* Image */}
              <div className="w-full h-[200px] md:h-[300px] bg-gray-100 dark:bg-[#1a1a1a] relative flex justify-center items-center overflow-hidden border-b-[4px] border-[var(--color-brand-yellow)] transition-colors duration-300">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} - Full Stack Developer Portfolio Project`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <h3 className="font-playfair text-4xl text-[#444] font-bold group-hover:scale-110 transition-transform duration-500 text-center px-4">
                    {project.title}
                  </h3>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-6">
                  <div
                    className="w-[70px] h-[70px] bg-[var(--color-brand-yellow)] rounded-full flex justify-center items-center text-white text-3xl hover:scale-110 transition-transform duration-300 shadow-xl"
                  >
                    <FaGithub />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex flex-col flex-grow">
                <h4 className="font-playfair text-3xl text-gray-900 dark:text-white font-bold mb-4">{project.title}</h4>
                <p className="font-space-mono text-gray-600 dark:text-[#a0a0a0] leading-[2.2] text-[15px] mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 dark:bg-[#222222] text-[var(--color-brand-yellow)] font-space-mono text-[12px] font-bold px-4 py-2 rounded-[3px] tracking-wider transition-colors duration-300 border border-gray-300 dark:border-[#444]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="font-space-mono text-[var(--color-brand-yellow)] group-hover:text-gray-900 dark:group-hover:text-white font-bold text-[14px] tracking-widest flex items-center gap-3 transition-colors duration-300 mt-auto w-fit"
                >
                  VIEW SOURCE ON GITHUB <FaExternalLinkAlt className="text-[12px]" />
                </div>
              </div>
            </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
