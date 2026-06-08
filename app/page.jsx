"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import DecorativeDots from "../components/DecorativeDots";
import ContactDrawer from "../components/ContactDrawer";
import PortfolioDrawer from "../components/PortfolioDrawer";
import BlogDrawer from "../components/BlogDrawer";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/images/background.png")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Decorative Dots Pattern */}
      <DecorativeDots />

      {/* Main Content Area */}
      <HeroSection />

      {/* Contact Drawer */}
      <ContactDrawer />

      {/* Portfolio Drawer */}
      <PortfolioDrawer />

      {/* Blog Drawer */}
      <BlogDrawer />
    </div>
  );
}

