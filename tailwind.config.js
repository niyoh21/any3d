module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "3D-Print-Image-1": "url('/src/Images/image2.jpg')",
        "3D-Print-Image-2": "url('/src/Images/image4.jpg')",
        "3D-Print-Animated-1": "url('/src/Images/3dPrintingAnimated.gif')",
      },
    },
  },
  plugins: [],
};
