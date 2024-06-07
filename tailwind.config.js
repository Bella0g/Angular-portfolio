/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#67e8f9",
          secondary: "#06b6d4",
          accent: "#FAA300",
          neutral: "#f5f5f4",
          "base-100": "#fffcff",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
          white: "#F5FAF9",
        },
      },
      // Add more themes here if needed
    ],
  },
  plugins: [require("daisyui")],
};
