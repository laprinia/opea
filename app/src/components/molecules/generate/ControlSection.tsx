import { Stack } from "@mantine/core";
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
    ></Stack>
  );
};
export default ControlSection;
