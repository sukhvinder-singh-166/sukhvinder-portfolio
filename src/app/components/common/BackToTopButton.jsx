"use client";
import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 w-10 border-2 border-white h-10 flex items-center justify-center rounded-full bg-white text-[#030712] shadow-md hover:bg-black hover:text-white transition-all ease-in-out duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.3s" }}
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
