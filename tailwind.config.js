/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        "spin-slow": "spin 120s linear infinite",
        "rocket-enter": "rocketEnter 2s ease-out forwards",
        "rocket-move": "rocketMove 4s ease-in-out infinite 2s", // delay added
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      fontFamily: {
        heading: ["GreaterTheory", "sans-serif"],
        script: ["Kensington", "cursive"],
        body: ["MontserratItalic", "sans-serif"], // for paragraph
        fancy: ["Sage", "cursive"], // extra font
        sans: ["Helvetica", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rocketMove: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        rocketEnter: {
          "0%": {
            transform: "translateY(200px)", // ❗ removed -50%
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(40)" },
        },
      },
    },
  },
  plugins: [],
};
