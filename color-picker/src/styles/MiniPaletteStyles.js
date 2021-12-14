const MiniPaletteStyles = {
  root: {
    backgroundColor: "#fff",
    border: "1px solid gray",
    position: "relative",
    borderRadius: "5px",
    padding: "0.5rem",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
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
    marginBottom: "-3.5px",
  },
  deleteContainer: {},
  deleteIcon: {
    position: "absolute",
    top: "0px",
    right: "0px",
    width: "40px !important",
    height: "30px !important",
    padding: "5px",
    zIndex: 10,
    color: "#fff",
    backgroundColor: "#ed4c67",
    opacity: 0,
    transition: "all 0.3s ease-in-out !important",
  },
};

export default MiniPaletteStyles;
