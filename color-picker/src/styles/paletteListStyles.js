const PaletteListStyles = {
  root: {
    backgroundColor: "#e39a9d",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflowY: "scroll",
  },
  container: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
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
    gridGap: "2.5rem",
    gridTemplateColumns: `repeat(3, 30%)`,
    boxStyle: "border-box",
    paddingBottom: "3rem",
  },
};

export default PaletteListStyles;
