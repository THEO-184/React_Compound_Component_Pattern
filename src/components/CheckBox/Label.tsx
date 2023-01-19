import React from "react";
import { ChildrenProps } from "./CheckBox";

interface Props extends Partial<ChildrenProps> {
  title: string;
}

function CheckBoxLable({ title, setChecked }: Props) {
  return (
    <label
      onClick={() => {
        setChecked?.((prev) => !prev);
      }}
    >
      {title}
    </label>
  );
}

export default CheckBoxLable;
