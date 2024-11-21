"use client";
import { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1); // Opacity state

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0); // Start fading out
      setTimeout(() => {
        setVisible(false); // Hide after fade-out
        if (onFinish) onFinish();
      }, 500); // Duration of fade-out animation
    }, 2000); // Initial display duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50 transition-opacity duration-500`}
      style={{ opacity }}
    >
      <h1 className="text-4xl font-bold animate-bounce">Sukhvinder Singh</h1>
    </div>
  );
};

export default Preloader;
