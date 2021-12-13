const ColorPickerFormStyles = {
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addButton: {
    width: "100%",
    marginTop: "2rem",
    fontSize: "1rem",
    backgroundColor: (props) =>
      props.paletteFull ? "#dbdbdb" : props.currentColor,
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
  },
};

export default ColorPickerFormStyles;
