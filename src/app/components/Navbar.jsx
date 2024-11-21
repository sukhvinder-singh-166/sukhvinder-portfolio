// components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAVLINKS } from "./common/Helper";
import { IconClose, IconMenu } from "./common/Icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="py-4 bg-[#030712] text-white">
      <div className="max-w-[1280px] px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold xl:text-[30px] relative z-30 lg:text-xl text-lg uppercase">
          <Link href="/">Sukhvinder Singh</Link>
        </div>

        {/* Desktop Menu */}
        <div className="items-center md:flex hidden">
          <ul className="flex gap-5">
            {NAVLINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-[#D1D5DB] font-medium relative transition-all duration-300 after:transition-all after:duration-300 after:content-[''] after:absolute after:bottom-[-50%] after:left-0 after:w-full after:h-[2px] after:bg-white after:opacity-0 hover:after:opacity-100"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="./assets/pdf/resume.pdf" className="ms-5" download>
            <button className="bg-white text-[#030712] px-4 py-2 rounded-xl text-base font-medium">
              Download CV
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-30">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 left-0 w-full h-full min-h-screen flex flex-col justify-center items-center bg-[#030712] z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col items-center gap-8">
          {NAVLINKS.map((link) => (
            <li key={link.href}>
              <Link
                className="text-[#D1D5DB] font-medium text-lg"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center">
          <Link
            href="./assets/pdf/resume.pdf"
            download
            className="mt-4 bg-white text-[#030712] px-6 py-2 rounded-xl text-base font-medium"
          >
            Download CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
