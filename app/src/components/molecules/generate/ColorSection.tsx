import { Stack } from "@mantine/core";
import React, { useState } from "react";

import { ColorBlock } from "../../../types";
import ColorBlockSection from "../../atoms/ColorBlockSection";

const ColorSection = () => {
  const sections = 6;
  const sectionHeight = 100 / sections;
  const sectionHeightString = sectionHeight.toString().concat("%");
  const [colorBlockArray, setColorBlockArray] = useState<ColorBlock[]>([
    { index: 0, colorValue: "#040406", colorFormat: "RGB" },
    { index: 1, colorValue: "#0c6a38", colorFormat: "RGB" },
    { index: 2, colorValue: "#0e4e8c", colorFormat: "RGB" },
    { index: 3, colorValue: "#fac205", colorFormat: "RGB" },
    { index: 4, colorValue: "#fb6008", colorFormat: "RGB" },
    { index: 5, colorValue: "#ece3e1", colorFormat: "RGB" },
  ]);

  return (
    <Stack
      bg="offBlack"
      spacing="0px"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "70%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {colorBlockArray.map((colorBlock: ColorBlock) => (
        <ColorBlockSection
          key={colorBlock.index}
          blockIndex={colorBlock.index}
          sectionHeightString={sectionHeightString}
          colorBlockValues={colorBlockArray}
          setColorBlockValues={setColorBlockArray}
        />
      ))}
    </Stack>
  );
};
export default ColorSection;
