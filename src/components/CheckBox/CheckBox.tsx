import React from "react";
import CheckBoxInput from "./CheckBoxInput";
import CheckBoxLabel from "./Label";

interface Props {
  children: React.ReactNode;
}

export interface ChildrenProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function CheckBox(props: Props) {
  const [checked, setChecked] = React.useState(false);
  const allChildren = React.Children.map(props.children, (child) => {
    const item = child as React.ReactElement<
      React.PropsWithChildren<ChildrenProps>
    >;
    const clone = React.cloneElement(item, {
      checked,
      setChecked,
    });
    return clone;
  });
  return <div>{allChildren}</div>;
}

CheckBox.Input = CheckBoxInput;
CheckBox.Label = CheckBoxLabel;

export default CheckBox;
