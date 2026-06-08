import React from "react";

export default function DecorativeDots() {
  return (
    <div
      className="absolute top-0 left-0 w-64 h-96 opacity-60 z-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(var(--color-brand-yellow) 2px, transparent 2px)",
        backgroundSize: "30px 30px",
        maskImage: "linear-gradient(to right, black, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom right, black, transparent)",
      }}
    ></div>
  );
}
