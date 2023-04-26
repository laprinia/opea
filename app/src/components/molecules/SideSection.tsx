import React from "react";
import { Stack } from "@mantine/core";
import SideSectionContent from "./SideSectionContent";
function SideSection() {
  return (
    <Stack
      align="center"
      justify="space-between"
      bg="offWhite"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "30%",
        height: "100%",
        boxSizing: "border-box",
        backgroundColor: "offWhite",
      }}
    >
      <SideSectionContent />
    </Stack>
  );
}
export default SideSection;
