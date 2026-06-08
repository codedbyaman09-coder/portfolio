"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSection } from "./SectionContext";

export default function BlogDrawer() {
  const { activeSection } = useSection();
  const isBlogOpen = activeSection === "blog";

  const posts = [
    {
      id: 1,
      title: "Getting Started with the MERN Stack in 2024",
      date: "15\nNOV",
      desc: "The MERN stack (MongoDB, Express.js, React, Node.js) has become one of the most popular tech stacks for building full-stack web applications. Learn how to combine these powerful JavaScript technologies to create scalable, modern web applications from scratch.",
      image: "/images/Getting Started with the MERN Stack.png"
    },
    {
      id: 2,
      title: "Building Robust Web Applications with Laravel",
      date: "23\nJAN",
      desc: "Laravel is a web application framework with expressive, elegant syntax. It takes the pain out of development by easing common tasks used in many web projects, such as routing, sessions, caching, and authentication. Discover why developers love Laravel.",
      image: "/images/Building Robust Web Applications with Laravel.png"
    },
    {
      id: 3,
      title: "Styling Web Apps Faster with Tailwind CSS",
      date: "04\nDEC",
      desc: "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. Experience rapid UI development.",
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
            <div key={post.id} className="w-full flex flex-col items-center bg-gray-100 dark:bg-[#333333] overflow-hidden shadow-lg dark:shadow-2xl max-w-[850px] mx-auto">
              <div className="w-full h-[200px] md:h-[450px] overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              
              <div className="w-full p-6 md:p-12 relative flex flex-col items-start">
                <div className="w-full text-left flex flex-col">
                  <h4 className="font-playfair text-2xl md:text-3xl text-gray-900 dark:text-white font-bold mb-4 md:mb-6 cursor-pointer transition-colors duration-300 leading-tight hover:text-[var(--color-brand-yellow)] dark:hover:text-[var(--color-brand-yellow)]">{post.title}</h4>
                  <p className="font-space-mono text-gray-600 dark:text-[#a0a0a0] leading-[2.2] text-[14px] md:text-[15px]">
                    {post.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
