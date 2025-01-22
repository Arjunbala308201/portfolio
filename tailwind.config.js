/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%":{transform:"rotate(30deg)"},
          "50%": { transform:"rotate(0deg)" },
          "75%":{transform:"rotate(30deg)"}
        },
      },
      animation: {
        wave: "wave 1.5s",
      },
    },
  },
  plugins: [],
};