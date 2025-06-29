"use client";

export default function RunningText({ text, speed = 60 }) {
  // Always move left, slow speed
  return (
    <div className="relative overflow-hidden bg-white py-6 border-y-2 border-green-400 shadow-md">
      <div className="parallax-banner whitespace-nowrap animate-slide-left" style={{ animationDuration: `${speed}s` }}>
        <span className="text-3xl md:text-4xl font-extrabold text-green-700 mx-8">
          {text}
        </span>
        <span className="text-3xl md:text-4xl font-extrabold text-green-700 mx-8">
          {text}
        </span>
        <span className="text-3xl md:text-4xl font-extrabold text-green-700 mx-8">
          {text}
        </span>
      </div>
    </div>
  );
}
