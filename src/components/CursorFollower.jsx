"use client";

import { useState, useEffect } from "react";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  useEffect(() => {
    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    };

    const interval = setInterval(animateTrail, 16);
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed w-4 h-4 bg-green-400 rounded-full pointer-events-none z-50 transition-all duration-150 ${
          isHovering ? "scale-200 bg-blue-600" : ""
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          filter: isHovering
            ? "drop-shadow(0 0 20px rgba(37, 99, 235, 0.8))"
            : "drop-shadow(0 0 10px rgba(220, 38, 38, 0.6))",
        }}
      ></div>

      {/* Trailing cursor */}
      <div
        className={`fixed w-8 h-8 border-2 border-red-600 rounded-full pointer-events-none z-40 transition-all duration-300 opacity-60 ${
          isHovering ? "scale-300 border-blue-600" : ""
        }`}
        style={{
          left: trailPosition.x - 16,
          top: trailPosition.y - 16,
        }}
      ></div>

      {/* Additional trail effect */}
      <div
        className="fixed w-12 h-12 border border-red-600/30 rounded-full pointer-events-none z-30 transition-all duration-500 opacity-30"
        style={{
          left: trailPosition.x - 24,
          top: trailPosition.y - 24,
          transform: `scale(${isHovering ? 2 : 1})`,
        }}
      ></div>
    </>
  );
}
