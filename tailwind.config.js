module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "3D-Print-Image-1": "url('/src/Images/image2.jpg')",
        "3D-Print-Image-2": "url('/src/Images/image4.jpg')",
        "3D-Print-Animated-1": "url('/src/Images/3dPrintingAnimated.gif')",
        "Shop-Logo": "url('/src/Images/shop-logo.jpg')",
        "Shop-Logo-2": "url('/src/Images/shop-logo2.jpg')",
        "Sample-Item": "url('/src/Images/sample_item.png')",
      },
    },
  },
  plugins: [],
};
