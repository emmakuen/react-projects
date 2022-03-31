import * as React from "react";
import { AddItemButton } from "./AddItemButton";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = React.useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    // show form
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
