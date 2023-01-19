import React, { useState, useContext, useCallback, useMemo } from "react";
import Header from "./Header";
import Content from "./Content";

interface Props {
  children: React.ReactNode;
}

interface AccordionContextProps {
  isExpanded: boolean;
  handleExpand: React.MouseEventHandler<HTMLButtonElement>;
}

const AccordionContext = React.createContext<AccordionContextProps | null>(
  null
);

function Accordion({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);
  const values = useMemo(
    () => ({
      isExpanded,
      handleExpand
    }),
    [isExpanded, handleExpand]
  );
  return (
    <AccordionContext.Provider value={values}>
      {children}
    </AccordionContext.Provider>
  );
}

Accordion.Header = Header;
Accordion.Content = Content;

export const useAccordionContext = () => useContext(AccordionContext);

export default Accordion;
