import React, { useState } from "react";

const useSimpleInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const clear = () => setValue("");
  const reset = () => setValue(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return { clear, reset, setValue, value, bind: { value, onChange } };
};

export default useSimpleInput;
