"use client";

import { useEffect, useRef, useState } from "react";

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  direction = "up", 
  className = "" 
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      let transformValue = "";
      
      switch (direction) {
        case "up":
          transformValue = `translateY(${rate}px)`;
          break;
        case "down":
          transformValue = `translateY(${-rate}px)`;
          break;
        case "left":
          transformValue = `translateX(${rate}px)`;
          break;
        case "right":
          transformValue = `translateX(${-rate}px)`;
          break;
        default:
          transformValue = `translateY(${rate}px)`;
      }
      
      setTransform(transformValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={ref}
      className={`transform-gpu ${className}`}
      style={{
        transform,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
