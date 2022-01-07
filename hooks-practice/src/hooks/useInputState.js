import { useState } from "react";

const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export default useInputState;
