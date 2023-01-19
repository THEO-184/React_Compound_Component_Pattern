import React from "react";
import { ChildrenProps } from "./CheckBox";

interface Props extends Partial<ChildrenProps> {}

function CheckBoxInput({ checked, setChecked }: Props) {
  return (
    <input
      type={"checkbox"}
      checked={checked}
      onChange={(e) => {
        setChecked?.(!!e.target.value);
      }}
    />
  );
}

export default CheckBoxInput;
