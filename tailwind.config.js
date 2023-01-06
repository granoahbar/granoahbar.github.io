/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 17s linear infinite",
        "bounce-slow": "bounce 2s linear infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
      colors: {
        accent: "#8b5cf6",
        base: "#171717",
        white: "#f8fafc",
      },
      backgroundImage: {
        sitegradient: "url('/src/assets/094 Cloudy Apple.png')",
      },
    },
  },
  plugins: [],
};
