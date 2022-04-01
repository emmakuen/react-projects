import * as React from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./index";
import { useFocus } from "../../hooks/useFocus";

interface NewItemProps {
  onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemProps) => {
  const [text, setText] = React.useState("");
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
