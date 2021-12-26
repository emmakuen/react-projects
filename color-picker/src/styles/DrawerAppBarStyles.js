import sizes from "./sizes";

const DrawerAppBarStyles = {
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
    [sizes.down("xs")]: {
      height: "55px",
    },
  },
  formContainer: {
    marginRight: "2rem",
    display: "flex",
    alignItems: "center",
    [sizes.down("xs")]: {
      marginRight: "5px",
    },
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
    [sizes.down("xs")]: {
      padding: "5px",
      fontSize: "12px",
      marginRight: "5px",
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
    [sizes.down("xs")]: {
      padding: "2px !important",
    },
  },
};

export default DrawerAppBarStyles;
