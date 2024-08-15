/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      blue: "#028e8f",
      white: "#ffffff",
      orange: "#f6a821",
      grey: "#f1f5f9",
      greyBlack: "#1a1a1a",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
