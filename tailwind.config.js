/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main1: "url(/images/chinese-chicken.webp)",
        main2: "url(/images/onion parora.webp)",
        main3: "url(/images/Palaak Paneer.webp)",
        main4: "url(/images/pexels-chanwalrus-958545.jpg)",
        main5: "url(/images/pexels-janetrangdoan-1128678.jpg)",
      },
    },
  },
  plugins: [],
};
