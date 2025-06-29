"use client";

import { useEffect, useState } from "react";

export default function ScrollParallax({
  children,
  speed = 0.5,
  className = "",
}) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
