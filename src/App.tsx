import "./styles.css";
import { Accordion } from "./components/Accordion";
import { CheckBox, CheckBoxInput, CheckBoxLable } from "./components/CheckBox";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { headerStyle } from "./utils/constants";
import { useAccordionContext } from "./components/Accordion/Accordion";

export default function App() {
  const context = useAccordionContext();
  return (
    <div>
      <Accordion>
        <Accordion.Header>
          <Box sx={headerStyle}>
            <Button variant="contained" onClick={context?.handleExpand}>
              Click Me
            </Button>
          </Box>
        </Accordion.Header>
        <Accordion.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptatum aut quam laudantium, corrupti accusamus dolores
          exercitationem consequatur a modi qui in earum, neque quae mollitia
          reprehenderit debitis quod officiis ipsum commodi maiores doloribus
          ad. Recusandae quis asperiores, in harum impedit reiciendis vero
          maxime aliquam explicabo nam magnam totam eligendi?
        </Accordion.Content>
      </Accordion>
      <CheckBox>
        <CheckBox.Input />
        <CheckBox.Label title="CheckBox Label" />
      </CheckBox>
    </div>
  );
}
