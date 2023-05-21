/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        "new-red": "#BC1A45",
        "new-melon": "#FFD369",
        "new-grey": "#DDD",
        "new-white": "#F7F7F7",
      },
    },
  },

  plugins: [],
};
