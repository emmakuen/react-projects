import sizes from "./sizes";
import bg from "./bg.svg";

const PaletteListStyles = {
  root: {
    height: "100vh",
    backgroundColor: "#e39a9d",
    backgroundImage: `url(${bg})`,
    // background by visiwig.com
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingBottom: "1rem",
    overflowY: "scroll",
  },
  container: {
    width: "50%",
    maxWidth: "900px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "70%",
    },
  },
  title: {
    fontSize: "2rem",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "1rem",
    "& a": {
      textDecoration: "none",
      color: "white",
      padding: "10px 20px",
      backgroundColor: "#e39a9d",
      borderRadius: "8px",
      border: "1px #f0ba8a solid",
    },
    "& a:hover": {
      backgroundColor: "#d69093",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridGap: "1.5rem",
    gridTemplateColumns: `repeat(3, 30%)`,
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  },
};

export default PaletteListStyles;
