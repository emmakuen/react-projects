const DrawerAppBarStyles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  },
  formContainer: {
    marginRight: "2rem",
    display: "flex",
    alignItems: "center",
  },
  goBackButton: {
    textDecoration: "none",
    color: "white",
    padding: "6px 20px",
    backgroundColor: "#a77579",
    marginRight: "1rem",
    borderRadius: "7px",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    "&:hover": {
      backgroundColor: "#DB999F",
    },
  },
  saveButton: {
    backgroundColor: "rgba(247, 189, 175, 0.7)",
    padding: "6px 20px",
    color: "#616565",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    "&:hover": {
      color: "white",
      border: "1px solid rgba(255, 255, 255, 0.7)",
    },
  },
};

export default DrawerAppBarStyles;
