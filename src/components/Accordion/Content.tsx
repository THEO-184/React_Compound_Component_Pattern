import React from "react";
import { useAccordionContext } from "./Accordion";

interface Props {
  children: React.ReactNode;
}

function Content({ children }: Props) {
  const context = useAccordionContext();
  return <>{context?.isExpanded ? <div>{children}</div> : null}</>;
}

export default Content;
