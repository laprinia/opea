import { Button } from "@mantine/core";
import React from "react";

interface NavButtonProps {
  text: string;
  color: string;
}
const NavButton = (props: NavButtonProps) => {
  return (
    <Button
      size="30px"
      variant="subtle"
      compact
      color={props.color}
      styles={(theme) => ({ inner: { height: "50px" } })}
    >
      {props.text}
    </Button>
  );
};

export default NavButton;
