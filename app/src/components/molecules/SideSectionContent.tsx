import React from "react";
import { Anchor, Space, Stack, Text, Title } from "@mantine/core";

const SideSectionContent = () => {
  return (
    <>
      <Stack align="center">
        <Space h="95%" />
        <Title order={1} c={"#141517"}>
          opea
        </Title>
        <Text
          variant="gradient"
          size="xl"
          gradient={{ from: "offBlack", to: "orangeJelly", deg: 40 }}
          align="center"
        >
          persist your color swatches
        </Text>
      </Stack>
      <Stack align="center">
        <Text
          variant="gradient"
          size="xl"
          gradient={{ from: "offBlack", to: "orangeJelly", deg: 40 }}
          align="center"
        >
          "logo"
        </Text>
        <Anchor
          href="https://mantine.dev/"
          target="_blank"
          align="center"
          color="offBlack"
        >
          What is this?
        </Anchor>
        <Space h="md" />
      </Stack>
    </>
  );
};
export default SideSectionContent;
