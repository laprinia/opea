import { Button } from "@mantine/core";
import React from "react";

interface NavButtonProps {
  text: string;
  color: string;
}
const NavButton = (props: NavButtonProps) => {
  return (
    <Button variant="subtle" compact color={props.color}>
      {props.text}
    </Button>
  );
};

export default NavButton;
