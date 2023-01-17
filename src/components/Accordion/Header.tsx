import React from "react";

interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props) {
  return <div>{children}</div>;
}

export default Header;
