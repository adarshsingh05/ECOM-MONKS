/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-green-500",
    "text-green-400",
    "text-green-200",
    "bg-green-50",
    "bg-green-200",
    "bg-green-400",
    "bg-green-500",
    "text-white",
    "bg-white",
    "border-green-400",
    "border-green-500",
    "from-green-400",
    "to-green-500",
    "from-green-200",
    "to-green-200",
    "from-white",
    "to-white",
  ],
  theme: {
    extend: {
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-right": "scroll-right 35s linear infinite",
        "grid-move": "grid-move 20s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "grid-move": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#fff",
        foreground: "#222",
        primary: {
          DEFAULT: "#22c55e",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#bbf7d0",
          foreground: "#222",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#4ade80",
          foreground: "#fff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#f0fdf4",
          foreground: "#222",
        },
        green: {
          50: "#f0fdf4",
          200: "#bbf7d0",
          400: "#4ade80",
          500: "#22c55e",
          900: "#14532d",
        },
        white: "#fff",
        black: "#222",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
