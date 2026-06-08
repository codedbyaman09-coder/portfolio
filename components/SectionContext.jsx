"use client";

import React, { createContext, useState, useContext } from "react";

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
