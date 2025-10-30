/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode using 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // --- Add your custom rotate here ---
      rotate: {
        20: "5deg", // rotate 40° clockwise
        5: "5deg", // rotate 40° counter-clockwise
      },

      // --- Your existing animations ---
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out infinite 1s",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
