module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lavender-50": "#F3E8FF",
        "lavender-100": "#E9D5FF",
        "lavender-300": "#D8B4FE",
        "gold-100": "#FAE6B1",
        "gold-300": "#F3C623",
        "gold-500": "#D4AF37",
        "cream-50": "#FFF8E1",
        "cream-100": "#FFEBCD",
        "cream-300": "#FFDAB9",
        "pastel-blue-100": "#A7C7E7",
        "pastel-pink-100": "#FADADD",
        "glitter-gold": "#FFD700",
        "glitter-silver": "#C0C0C0",
      },
      backgroundImage: (theme) => ({
        "gradient-lavendergold": "linear-gradient(90deg, #E9D5FF 0%, #F3C623 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"]
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};