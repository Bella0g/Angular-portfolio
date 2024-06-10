/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes:  ["light", "dark", "aqua"],
  
  },
  plugins: [require("daisyui")],
};
