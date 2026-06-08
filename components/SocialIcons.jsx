import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="hidden md:flex fixed bottom-10 right-10 z-50 items-center gap-6 drop-shadow-md">
      <a href="#" className="text-white">
        <FaFacebookF className="text-base" />
      </a>
      <a href="#" className="text-white">
        <FaTwitter className="text-base" />
      </a>
      <a href="https://www.linkedin.com/in/aman-kulariya-30a07a3b0" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaLinkedinIn className="text-base" />
      </a>
      <a href="#" className="text-white">
        <FaDribbble className="text-base" />
      </a>
      <a href="https://www.instagram.com/aman.kulriya?igsh=bmJ3d2VuajYzZWFj" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaInstagram className="text-base" />
      </a>
    </div>
  );
}
