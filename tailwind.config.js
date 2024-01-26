/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropFilter: {
        blur: "blur(16.7px)",
      },
      keyframes: {
        moveDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        moveDown: "moveDown 4s linear infinite",
      },
    },
  },
  plugins: [],
};
