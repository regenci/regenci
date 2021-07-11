module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },
      dropShadow: {
        cstm: "1px 2px 4px white",
      },
      width: {
        250: "250px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
        1000: "1000px",
      },
      height: {
        350: "350px",
        500: "500px",
        600: "600px",
        1000: "1000px",
        "6/7": "95%",
      },
      maxHeight: {
        1000: "1000px",
        2000: "2000px",
      },
      rounded: {
        20: "20px",
      },
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
      screens: {
        xm: { max: "550px" },
      },
    },
    boxShadow: {
      "2xl": "0 1px 2px black",
    },
    screens: {
      sm: { max: "767px" },
      md: { max: "1023px" },
      lg: { max: "1279px" },
      xl: { max: "1535px" },
      xxl: { min: "1536px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
