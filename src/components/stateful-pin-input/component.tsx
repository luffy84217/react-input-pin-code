import { useState } from "react";
import type { Component } from "./types";
import { PinInput } from "../pin-input";

export const StatefulPinInput: Component = ({
  length = 4,
  initialValue = '',
  onChange,
  ...props
}) => {
  const [values, setValues] = useState(
    Array.from({ length }, (_v, i) => initialValue[i])
  );

  const handleInputChange = (
    value: string | string[],
    index: number,
    values: string[]
  ) => {
    setValues(values);
    if (onChange) {
      onChange(value, index, values);
    }
  };

  return <PinInput values={values} onChange={handleInputChange} {...props} />;
};
