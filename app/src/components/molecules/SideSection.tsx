import { Stack } from "@mantine/core";
import React from "react";

import SideSectionContent from "./SideSectionContent";

interface SideSectionProps {
  isReversed?: boolean;
}
const SideSection = (sideProps: SideSectionProps) => {
  return (
    <Stack
      align="center"
      justify="space-between"
      bg="offWhite"
      sx={{
        marginLeft: !sideProps.isReversed ? "0%" : "70%",
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
};
export default SideSection;
