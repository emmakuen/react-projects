const DrawerAppBarStyles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  },
  formContainer: {},
  goBackButton: {
    textDecoration: "none",
    color: "white",
    padding: "6px 20px",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "7px",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    submitButton: {
      backgroundColor: "#ffb69e",
      color: "#616565",
    },
  },
};

export default DrawerAppBarStyles;
