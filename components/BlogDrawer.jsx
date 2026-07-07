"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useSection } from "./SectionContext";

export default function BlogDrawer() {
  const { activeSection } = useSection();
  const isBlogOpen = activeSection === "blog";

  const posts = [
    {
      id: 1,
      title: "Architecting Scalable Applications with the MERN Stack",
      date: "15\nNOV",
      desc: "Dive deep into the MERN stack (MongoDB, Express.js, React, Node.js). Explore advanced patterns for state management, RESTful API design, and schema validation to build enterprise-ready full-stack web applications.",
      image: "/images/Getting Started with the MERN Stack.png"
    },
    {
      id: 2,
      title: "Enterprise Web Development with Laravel & MVC",
      date: "23\nJAN",
      desc: "Discover how to leverage Laravel's elegant syntax for robust backend architecture. Learn about advanced routing, Eloquent ORM relationships, robust authentication mechanisms, and caching strategies for high-performance applications.",
      image: "/images/Building Robust Web Applications with Laravel.png"
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS for Modern UI/UX Design",
      date: "04\nDEC",
      desc: "Transform your UI development workflow with Tailwind CSS. Learn how to implement responsive design systems, custom configuration themes, and utility-first strategies to accelerate frontend styling without sacrificing design quality.",
      image: "/images/Styling Web Apps Faster with Tailwind CSS.png"
    }
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-[#222222] z-[100] transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${isBlogOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex flex-col items-center justify-start min-h-full w-full py-16 md:py-24 px-4 md:px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="font-playfair text-5xl md:text-8xl lg:text-[100px] font-bold text-gray-900 dark:text-white mb-12 md:mb-20 text-center tracking-wide">
          Latest <span className="text-[var(--color-brand-yellow)] transition-colors duration-300">Posts</span>
        </h2>
        
        {/* Blog Grid */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-16 mb-16">
          {posts.map(post => (
            <article key={post.id} className="w-full flex flex-col items-center bg-gray-100 dark:bg-[#333333] overflow-hidden shadow-lg dark:shadow-2xl max-w-[850px] mx-auto">
              <div className="w-full h-[200px] md:h-[450px] overflow-hidden relative">
                <Image src={post.image} alt={`${post.title} - Aman Kulariya Blog`} fill className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              
              <div className="w-full p-6 md:p-12 relative flex flex-col items-start">
                <div className="w-full text-left flex flex-col">
                  <h3 className="font-playfair text-2xl md:text-3xl text-gray-900 dark:text-white font-bold mb-4 md:mb-6 cursor-pointer transition-colors duration-300 leading-tight hover:text-[var(--color-brand-yellow)] dark:hover:text-[var(--color-brand-yellow)]">{post.title}</h3>
                  <p className="font-space-mono text-gray-600 dark:text-[#a0a0a0] leading-[2.2] text-[14px] md:text-[15px]">
                    {post.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
