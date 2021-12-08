const MiniPaletteStyles = {
  root: {
    backgroundColor: "#fff",
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "0.5rem",
    positiion: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "120px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "#000",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColorBox: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0",
    position: "relative",
    marginBottom: "-3.5px",
  },
};

export default MiniPaletteStyles;
