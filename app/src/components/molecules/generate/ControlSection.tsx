import { Container, Flex, Stack, Text } from "@mantine/core";
import { BlendingModeIcon } from "@radix-ui/react-icons";
import React from "react";

const ControlSection = () => {
  return (
    <Stack
      align="center"
      justify="space-between"
      bg="offWhite"
      sx={{
        marginLeft: "70%",
        position: "absolute",
        top: 0,
        left: 0,
        width: "30%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Flex justify="center" align="center" direction="row">
        <Text>Controls</Text>
        <BlendingModeIcon />
        <Container>s</Container>
      </Flex>
    </Stack>
  );
};
export default ControlSection;
