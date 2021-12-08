import React from "react";
import DraggableColorBox from "../components/DraggableColorBox";
import DrawerMain from "../components/DrawerMain";
import DrawerHeader from "../components/DrawerHeader";

const DrawerMainContent = ({ drawerWidth, open, removeColor, colors }) => {
  return (
    <DrawerMain drawerWidth={drawerWidth} open={open}>
      <DrawerHeader />
      <div
        style={{
          height: "calc(100vh - 53px)",
          margin: "-24px",
        }}
      >
        {colors.map((color) => (
          <DraggableColorBox color={color} removeColor={removeColor} />
        ))}
      </div>
    </DrawerMain>
  );
};

export default DrawerMainContent;
