"use client";

import { useState } from "react";
import { useSection } from "./SectionContext";
import {
  FaTimes,
  FaHome,
  FaAddressCard,
  FaBriefcase,
  FaEnvelope,
  FaFolder,
} from "react-icons/fa";

const menuItems = [
  { name: "HOME", icon: FaHome, active: true },
  { name: "ABOUT", icon: FaAddressCard },
  { name: "PORTFOLIO", icon: FaBriefcase },
  { name: "CONTACT", icon: FaEnvelope },
  { name: "BLOG", icon: FaFolder },
];

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const { setActiveSection } = useSection();

  const handleMenuClick = (itemName) => {
    if (itemName === "HOME") {
      setActiveSection("");
      setOpen(false);
    } else if (itemName === "ABOUT") {
      setActiveSection("about");
      setOpen(false);
    } else if (itemName === "CONTACT") {
      setActiveSection("contact");
      setOpen(false);
    } else if (itemName === "PORTFOLIO") {
      setActiveSection("portfolio");
      setOpen(false);
    } else if (itemName === "BLOG") {
      setActiveSection("blog");
      setOpen(false);
    }
  };

  return (
    <div className="fixed right-4 md:right-[60px] top-6 md:top-[72px] z-[200] flex flex-col items-end">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex h-14 w-14 md:h-[70px] md:w-[70px] items-center justify-center bg-[#333333] text-white transition-colors duration-300 hover:bg-black z-[200]"
      >
        {open ? (
          <FaTimes className="text-[36px] font-light transition-transform duration-300 rotate-90" />
        ) : (
          <div className="flex flex-col items-center justify-center gap-[6px] transition-transform duration-300">
            <span className="block h-[2px] w-[30px] bg-white"></span>
            <span className="block h-[2px] w-[30px] bg-white"></span>
            <span className="block h-[2px] w-[30px] bg-white"></span>
          </div>
        )}
      </button>

      {/* Dropdown Menu Box */}
      <div
        className={`w-[220px] md:w-[260px] bg-[#333333] shadow-md transition-all duration-400 ease-in-out origin-top overflow-hidden mt-1 ${open ? "max-h-[600px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col gap-5 md:gap-[26px] p-6 md:p-[30px] py-8 md:py-[36px]">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className={`relative flex items-center gap-[22px] font-mono text-[20px] font-bold uppercase transition-colors duration-200 cursor-pointer ${item.active ? "text-[var(--color-brand-yellow)]" : "text-white hover:text-[var(--color-brand-yellow)]"
                  }`}
              >
                {/* Active Yellow Line Indicator */}
                {item.active && (
                  <span className="absolute left-[-30px] top-1/2 h-[14px] w-[4px] -translate-y-1/2 bg-[var(--color-brand-yellow)] transition-colors duration-300" />
                )}

                <Icon className="text-[20px]" />
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}