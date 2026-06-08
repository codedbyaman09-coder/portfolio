"use client";

import React, { useState, useEffect } from "react";
import { FaCog, FaTint, FaTimes } from "react-icons/fa";

const colors = [
  "#ffb900", // Gold
  "#007bff", // Blue
  "#8b5a2b", // Brown
  "#17a2b8", // Teal
  "#fd7e14", // Orange
  "#6f42c1", // Purple
  "#28a745", // Green
  "#6c757d", // Slate
  "#6610f2", // Indigo
  "#0dcaf0", // Light Blue
  "#e83e8c", // Pink
  "#d63384", // Violet
  "#dc3545", // Red
  "#20c997", // Dark Teal
];

export default function SettingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("#ffb900");
  const [skin, setSkin] = useState("dark");

  useEffect(() => {
    // Check initial skin
    const savedSkin = localStorage.getItem("skin") || "dark";
    setSkin(savedSkin);
    if (savedSkin === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleSkinChange = (e) => {
    const newSkin = e.target.value;
    setSkin(newSkin);
    localStorage.setItem("skin", newSkin);
    if (newSkin === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeColor = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--color-brand-yellow", color);
  };

  return (
    <div
      className="fixed right-0 top-[35%] md:top-[20%] z-[200] flex transition-transform duration-500 ease-in-out"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(220px)" }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-[-40px] md:left-[-50px] top-0 w-10 h-10 md:w-[50px] md:h-[50px] bg-white flex items-center justify-center shadow-lg rounded-l-md cursor-pointer"
        aria-label="Toggle Color Switcher"
      >
        {isOpen ? (
          <FaTimes className="text-[#333333] text-xl md:text-2xl" />
        ) : (
          <FaCog className="text-[#333333] text-xl md:text-2xl animate-spin [animation-duration:3s]" />
        )}
      </button>

      {/* Color Switcher Panel */}
      <div className="bg-white text-black w-[220px] shadow-2xl relative">
        <div className="p-6">
          <h3 className="font-bold text-center mb-6 text-sm tracking-wider uppercase">
            Color Switcher
          </h3>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => changeColor(color)}
                className="flex items-center justify-center transition-transform hover:scale-110"
                aria-label={`Change theme to ${color}`}
              >
                <FaTint
                  className="text-3xl"
                  style={{ color: color }}
                />
              </button>
            ))}
          </div>

          <hr className="border-gray-300 my-6" />

          <h3 className="font-bold text-center mb-4 text-sm tracking-wider uppercase">
            Body Skin
          </h3>
          <div className="flex flex-col gap-3 px-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="skin"
                value="dark"
                checked={skin === "dark"}
                onChange={handleSkinChange}
                className="w-4 h-4 text-[#007bff]"
              />
              <span className="text-sm font-mono text-black">Dark</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="skin"
                value="light"
                checked={skin === "light"}
                onChange={handleSkinChange}
                className="w-4 h-4"
              />
              <span className="text-sm font-mono text-black">Light</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}




