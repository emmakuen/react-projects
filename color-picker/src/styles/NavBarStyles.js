import sizes from "./sizes";

const NavBarStyles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },

  logo: {
    marginRight: "1rem",
    padding: "0 13px",
    paddingTop: "1.6vh",
    height: "100%",
    "& a": {
      textDecoration: "none",
    },
    "& a span": {
      fontSize: "1.3rem",
      fontWeight: "900",
      fontFamily: "'Fredoka One', cursive",
      marginRight: "2px",
    },
  },

  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .-slider-handle:focus, .rc-slider-handle:hover":
      {
        backgroundColor: "rgba(49, 182, 149, 0.795)",
        outline: "none",
        border: "2px solid rgb(66, 170, 156)",
        width: "13px",
        height: "13px",
        marginLeft: "-7px",
        marginTop: "-3px",
        boxShadow: "none",
      },

    "& .rc-slider-rail": {
      height: "8px",
    },
    [sizes.down("sm")]: {
      width: "150px",
    },
    [sizes.down("xs")]: {
      width: "100px",
    },
  },
  sliderText: {
    [sizes.down("xs")]: {
      fontSize: "14px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "0",
  },
};

export default NavBarStyles;
