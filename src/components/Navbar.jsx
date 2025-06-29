"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ["services", "frameworks", "proof", "about"];
      let found = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = section;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-green-400/30 shadow-2xl"
          : "bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
        <div className="flex items-center w-full">
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer min-w-0 flex-1 ml-[-140px]">
            <img
              src="/logo.png"
              alt="The Ecom Monks"
              className="h-16 w-auto max-w-[90px] md:h-20 md:max-w-[110px] lg:h-24 lg:max-w-[130px] object-contain"
              style={{ display: 'block' }}
            />
            <div className="hidden sm:flex whitespace-nowrap text-2xl md:text-3xl lg:text-4xl font-black transition-all duration-500 group-hover:scale-105 flex-shrink min-w-0 items-center truncate max-w-[180px] md:max-w-xs lg:max-w-md">
              <span className="text-green-500 drop-shadow-lg">THE</span>
              <span className="text-green-400 ml-2 md:ml-3 drop-shadow-lg">ECOM</span>
              <span className="text-green-900 ml-2 md:ml-3 drop-shadow-lg">MONKS</span>
            </div>
            <div className="flex sm:hidden whitespace-nowrap text-xl font-black transition-all duration-500 group-hover:scale-105 flex-shrink min-w-0 items-center truncate max-w-[80px]">
              <span className="text-green-400">ECOM</span>
              <span className="text-green-900 ml-1">MONKS</span>
            </div>
          </div>
          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-16 justify-end flex-shrink-0">
            {["Services", "Frameworks", "Proof", "About"].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`relative text-green-900 font-bold text-xl hover:text-green-500 transition-all duration-500 group ${
                    isActive ? "text-green-500" : ""
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
            <button className="bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-10 py-5 rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-1">
              GET FREE AUDIT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-green-500 p-3 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <span
                className={`bg-green-500 block transition-all duration-500 ease-out h-1 w-8 rounded-sm ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2"
                    : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`bg-green-500 block transition-all duration-500 ease-out h-1 w-8 rounded-sm my-1 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-green-500 block transition-all duration-500 ease-out h-1 w-8 rounded-sm ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2"
                    : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-400/30">
            <div className="px-8 py-10 space-y-8">
              {["Services", "Frameworks", "Proof", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-green-900 font-bold text-2xl hover:text-green-500 transition-colors duration-500 py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-500 mt-8">
                GET FREE AUDIT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
