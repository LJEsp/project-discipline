export default {
  breakpoint: {
    mobile: "599px", // >>> 599px
    tabletSmall: "719px", // >>> 719px
    tabletSmallEnd: "720px", // >>> 719px
    tabletLarge: "839px" // >>> 839px
  },
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
    xs: "0.17em", //
    s: "0.33em", //
    m: "0.67em", //
    l: "1.33em", //
    xl: "2.67em", //
    base: "1em", //
    px: px => `${px / 16 / 1.5}em`,
    increment: increment => `${increment * 1}em`
  },
  shadow: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  ]
};
