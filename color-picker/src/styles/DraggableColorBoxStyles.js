import sizes from "./sizes";
import { formatLightColor } from "../utils/colorHelper";

const DraggableColorBoxStyles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0",
    padding: "0",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6px",
    "&:hover span": {
      [sizes.down("sm")]: {
        fontSize: "14px !important",
      },
    },
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
      [sizes.down("sm")]: {
        transform: "scale(1.3)",
      },
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "9.66%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    padding: "10px",
    left: "0",
    bottom: "0",
    color: (props) => formatLightColor(props),
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    [sizes.down("sm")]: {
      padding: 0,
      paddingLeft: "5px",
    },
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default DraggableColorBoxStyles;
