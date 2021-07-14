module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
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
