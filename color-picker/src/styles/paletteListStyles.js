const PaletteListStyles = {
  root: {
    backgroundColor: "#e39a9d",
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "scroll",
    paddingBottom: "10rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
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
    gridGap: "5%",
    gridTemplateColumns: `repeat(3, 30%)`,
  },
};

export default PaletteListStyles;
