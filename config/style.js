export default {
  breakpoint: [
    // >>> desktop first breakpoints
    "37.4375rem", // >>> 599px
    "44.9375rem", // >>> 719px
    "52.4375rem" // >>> 839px
  ],
  font: {
    family: {
      primary: "Montserrat, sans-serif"
    },
    scale: [
      "1em", // >>> 16px
      "1.1875em", // >>> 19px
      "1.3125em", // >>> 21px
      "1.5em", // >>> 24px
      "1.75em", // >>> 28px
      "2em", // >>> 32px
      "3em", // >>> 48px
      "3.875em" // >>> 62px
    ] 
  },
  color: {
    primary: {
      main: "#A5E7E8",
      light: "",
      dark: ""
    },
    seconday: {
      main: "",
      light: "",
      dark: ""
    },
    tertiary: {
      main: "",
      light: "",
      dark: ""
    },
    light: "#FAFAFA",
    dark: "#212121",
    white: "#FFFFFF",
    black: "#000000",
    grey: {
      light: "#F5F5F5",
      medium: "#9E9E9E",
      dark: "#424242"
    }
  },
  size: {
    xs: "0.25em", // 4
    s: "0.5em", // 8
    m: "1em", // 16
    l: "2em", // 32
    xl: "4em", // 64
    em: px => `${px / 16}em`
  },
  shadow: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  ]
};

// const breakpoints = [
//   // >>> desktop first breakpoints
//   "37.4375rem", // >>> 599px
//   "44.9375rem", // >>> 719px
//   "52.4375rem" // >>> 839px
// ];

// const font = {
//   primary: "Montserrat, sans-serif"
// };

// const color = {
//   primary: {
//     main: "",
//     light: "",
//     dark: ""
//   },
//   seconday: {
//     main: "",
//     light: "",
//     dark: ""
//   },
//   light: "",
//   dark: "",
//   white: "#FFFFFF",
//   black: "#000000",
//   grey: {
//     light: "",
//     medium: "",
//     dark: ""
//   }
// };

// const typography = {
//   h1: {
//     size: ""
//   },
//   h2: {
//     size: ""
//   },
//   h3: {
//     size: ""
//   },
//   body: {
//     size: ""
//   },
//   subtitle: {},
//   caption: {}
// };

// const size = {
//   m: "24em"
// };

// module.exports = {
//   color,
//   typography,
//   font
// };
