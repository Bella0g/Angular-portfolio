/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {},
};
export const daisyui = {
  themes: [
    {
      mytheme: {
        primary: "#F0F0F0",
        secondary: "#4A6B8A",
        accent: "#F37D16",
        neutral: "#0a0510",
        "base-100": "#1C1C1C",
        info: "#00e9ff",
        success: "#7dc61a",
        warning: "#ffa100",
        error: "#d20044",
      },
    },
  ],
};
export const plugins = [require("daisyui")];
