import { formatLightColor } from "../utils/colorHelper";
import sizes from "./sizes";

const ColorBoxStyles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.moreUrl ? "25%" : "50%"),
    margin: "0",
    padding: "0",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "all 0.5s ease-in-out",
    },
    "@media (max-width: 900px)": {
      width: "50%",
    },

    "@media (max-width: 500px)": {
      width: "100%",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.moreUrl ? "20%" : "33.3333%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.moreUrl ? "10%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.moreUrl ? "5%" : "10%"),
    },
  },
  copyText: {
    fontWeight: "100",
    fontSize: "2rem",
    color: (props) => formatLightColor(props),
  },
  colorName: {
    color: (props) => formatLightColor(props),
  },
  seeMore: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    position: "absolute",
    bottom: "0",
    right: "0",
    border: "none",
    margin: "0",
    padding: "5px 20px",
    textTransform: "uppercase",
    fontSize: "14px",
    color: (props) => formatLightColor(props),
  },

  copyButton: {
    width: "100px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    border: "none",
    background: "rgba(255, 255, 255, 0.4)",
    fontSize: "1rem",
    padding: "7px",
    textTransform: "uppercase",
    textDecoration: "none",
    color: (props) => formatLightColor(props),
    opacity: "0",
  },

  boxContent: {
    position: "absolute",
    width: "100%",
    padding: "10px",
    left: "0",
    bottom: "0",
    color: "rgb(46, 46, 46)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0)",
    transition: "transform 0.6s ease-in-out",
    textAlign: "center",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },

  copyMessage: {
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    top: "0",
    color: (props) => formatLightColor(props),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    flexDirection: "column",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px rgba(0, 0, 0, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      padding: "1rem",
      width: "100%",
      marginBottom: "0",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "5rem",
      },
    },
  },
  showCopyMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "20",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};

export default ColorBoxStyles;
