import sizes from "./sizes";

const PaletteStyles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  paletteColors: {
    height: "90%",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0",
    padding: "0",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    backgroundColor: "black",
    opacity: "1",
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
  goBackText: {
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
    color: "white",
  },
};

export default PaletteStyles;
