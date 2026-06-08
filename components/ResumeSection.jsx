"use client";

import React, { useState, useEffect, useRef } from "react";

const ResumeCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [item.desc]);

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#333333] p-6 md:p-10 flex flex-col items-start text-left shadow-sm dark:shadow-lg h-full min-h-[350px] md:min-h-[400px] rounded-sm">
      <div className="flex justify-between items-center w-full mb-3">
        <h3 className="font-playfair text-[20px] md:text-2xl font-bold text-[#333333] dark:text-white">
          {item.role}
        </h3>
      </div>

      <h4 className="font-space-mono text-[#555555] dark:text-white text-[15px] mb-6 font-bold tracking-wide">
        {item.company}
      </h4>

      <div className="w-full">
        <p
          ref={textRef}
          className={`font-space-mono text-[#666666] dark:text-[#a0a0a0] text-[14px] leading-[2.2] transition-all duration-300 ${!isExpanded ? "line-clamp-5 overflow-hidden" : ""}`}
        >
          {item.desc}
        </p>

        {isOverflowing && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 flex items-center text-[var(--color-brand-yellow)] font-space-mono text-[13px] font-bold tracking-wider hover:opacity-80 transition-opacity"
          >
            {isExpanded ? "READ LESS" : "READ MORE"}
            <span className="ml-2 text-[10px]">{isExpanded ? "▲" : "▼"}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState("education");
  const [currentPage, setCurrentPage] = useState(0);


  const educationData = [
    {
      id: 1,
      role: "BCA (In Progress) - Vivekananda Global University",
      date: "2024-2027",
      company: "Vivekananda Global University",
      desc: "Currently pursuing Bachelor of Computer Applications at Vivekananda Global University,building strong knowledge in programming,data structures, software development, and actively participating in hackathons and coding challenges."
    },

    {
      id: 2,
      role: `Govt. Seth Bherudan Chopra Sr. Sec. School, Bikaner(2022)`,
      date: "2010 - 2012",
      company: "IT College",
      desc: "12th Class with  from Govt. Seth Bherudan Chopra Sr. Sec. School, Bikaner (2022)."
    },
    {
      id: 3,
      role: "O Level - NIELIT",
      date: "2018 - 2019",
      company: "Programming Fundamentals, Web Technologies, Database Concepts",
      desc: "Completed O Level certification from NIELIT, gaining foundational knowledge in programming, web technologies, and database concepts."
    },
    {
      id: 4,
      role: "Tally ERP",
      date: "2022",
      company: "Accounting, GST, Inventory & Financial Reporting",
      desc: "Completed Tally ERP certification, mastering accounting principles, GST compliance, inventory management, and financial reporting."
    },
    {
      id: 5,
      role: "RSCIT",
      date: "2022",
      company: "Rajasthan State Certificate in Information Technology",
      desc: "Completed RSCIT certification, gaining essential computer skills including Microsoft Office, internet navigation, and digital literacy."
    },
    {
      id: 7,
      role: "full stack developer ",
      date: "2022",
      company: "MERN Stack, Laravel, Nest.js, UI/UX",
      desc: "Skilled in building modern, responsive, and user-friendly web applications using React, Next.js, Laravel, Node.js, and database technologies."
    }
  ];

  const currentData = activeTab === "experience" ? experienceData : educationData;
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [totalPages, currentPage]);

  // Auto-slide effect
  useEffect(() => {
    if (totalPages > 1) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      }, 4000); // Slides every 4 seconds
      return () => clearInterval(interval);
    }
  }, [totalPages, activeTab]);

  const displayedData = currentData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  return (
    <div className="w-full mt-24 md:mt-32 max-w-[1200px] mx-auto flex flex-col items-center">
      {/* Title */}
      <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-10 md:mb-12 tracking-wide text-center">
        My Resume
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6 gap-y-4 mb-12 md:mb-16 font-space-mono text-[13px] md:text-sm tracking-widest font-bold px-4">
        <button
          onClick={() => handleTabChange("education")}
          className={`uppercase transition-colors duration-300 ${activeTab === "education" ? "text-[var(--color-brand-yellow)]" : "text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
        >
          EDUCATION
        </button>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        {displayedData.map((item) => (
          <ResumeCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${currentPage === index
                ? "w-8 h-2 bg-[var(--color-brand-yellow)]"
                : "w-2 h-2 bg-gray-300 dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-300"
                }`}
              aria-label={`Page ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
