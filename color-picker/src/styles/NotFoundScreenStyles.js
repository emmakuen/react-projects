import bg from "./bg.svg";

const NotFoundScreenStyles = {
  root: {
    height: "100vh",
    backgroundColor: "#e39a9d",
    backgroundImage: `url(${bg})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    fontSize: "2rem",
    letterSpacing: "2px",
    fontWeight: 700,
  },
  goBack: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: 400,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
    marginTop: "2rem",
    border: "#fff 1px solid",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  },
};

export default NotFoundScreenStyles;
