"use client";

import { useState, useRef, useEffect } from "react";

export default function ThreeDCard({
  children,
  className = "",
  intensity = 1,
}) {
  const [transform, setTransform] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / (6 / intensity);
    const rotateY = (centerX - x) / (6 / intensity);
    setTransform(`
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.08, 1.08, 1.08)
      translateZ(30px)
    `);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)"
    );
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out transform-gpu bg-white border-2 border-green-200 shadow-md ${className} ${
        isHovered ? "z-20 shadow-2xl border-green-400" : "z-0"
      } ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
      style={{
        transform,
        transformStyle: "preserve-3d",
        fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="transition-shadow duration-500">
        {children}
      </div>
    </div>
  );
}
