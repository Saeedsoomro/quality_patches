/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    domains: ["tse4.mm.bing.net"],
  },
  theme: {
    colors: {
      // Using modern `rgb`
      primary: "#2e355a",
      lightgray: "#d1d5db",
      bgGray: "#0000FF",
      white: "#ffffff",
      lightblack: "#7C5656",
      lightblue: "#0A1C43",
      blue: "	#0000FF",
      red: "#FF0000",
      slate: "#ebebeb",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
