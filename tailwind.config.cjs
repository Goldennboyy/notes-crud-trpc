/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    theme: ["dark", "night"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

module.exports = config;
