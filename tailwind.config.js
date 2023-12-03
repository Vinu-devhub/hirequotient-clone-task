/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#fdf2ec",
        color: "rgb(28, 28, 28)",
        text2: "#767575",
        primary: "#8247ff",
      },
      boxShadow: {
        heroShadow:
          "0 0.6021873017743928px 0.36131238106463576px -0.9166666666666666px #fafcff14, 0 2.288533303243457px 1.3731199819460744px -1.8333333333333333px #fafcff14, 0 10px 6.000000000000001px -2.75px #fafcff11, 0 34px 30px -16px #e3e7ed",
      },
      transformOrigin: {
        "hero-transform":
          "transform: perspective(1200px) translateX(0px) translateY(0px) scale(0.9) rotate(0deg) rotateX(-20deg) rotateY(0deg) translateZ(0px);",
      },
    },
  },
  plugins: [],
};
