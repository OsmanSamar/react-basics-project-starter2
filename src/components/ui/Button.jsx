import { Button as CButton } from "@chakra-ui/react";
export const Button = ({ text, clickFn }) => (
  <CButton className="button" onClick={clickFn}>
    {text}
  </CButton>
);
