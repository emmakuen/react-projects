import React from "react";
import DrawerMain from "./DrawerMain";
import DrawerHeader from "./DrawerHeader";
import DraggableColorList from "./DraggableColorList";

const DrawerMainContent = ({
  drawerWidth,
  open,
  removeColor,
  colors,
  onSortEnd,
}) => {
  return (
    <DrawerMain drawerWidth={drawerWidth} open={open}>
      <DrawerHeader />
      <div
        style={{
          height: "calc(100vh - 53px)",
          margin: "-24px",
        }}
      >
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </div>
    </DrawerMain>
  );
};

export default DrawerMainContent;
