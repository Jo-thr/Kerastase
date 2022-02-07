module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFF",
      lighterGray: "#F5F5F5",
      lightGray: "#E0E0E0",
      gray: "#242424",
      darkerGray: "#1A1A1A",
      mediumPink: "#EFD1E1",
      beige: "#E3BBA2",
    },
    fontFamily: {
      PlayfairDisplay: ["Playfair Display", "Arial", "sans-serif"],
      DinCondensed: ["DinCondensed", "Arial", "sans-serif"],
      AvenirLTStd: ["AvenirLTStd", "Arial", "sans-serif"],
    },
    spacing: {
      0: "0px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      8: "40px",
      10: "50px",
      12: "60px",
      16: "80px",
      20: "100px",
      24: "120px",
      50: "200px",
      60: "300px",
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
