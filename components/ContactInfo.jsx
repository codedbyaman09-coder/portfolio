import React from "react";

export default function ContactInfo() {
  return (
    <div className="hidden md:flex fixed bottom-10 left-10 z-50 flex-col items-start font-space-mono text-sm text-left leading-loose drop-shadow-md">
      <p className="text-white">Let's work together</p>
      <p className="text-[var(--color-brand-yellow)] transition-colors duration-300">codedbyaman09@gmail.com</p>
      <p className="text-white">+91 8356873389</p>
    </div>
  );
}
