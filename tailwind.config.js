/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {},
};
export const daisyui = {
  themes: ["light", "dark"],
};
export const plugins = [require("daisyui")];
