import { Anchor, Image, Space, Stack, Text, Title } from "@mantine/core";
import React from "react";

const SideSectionContent = () => {
  const imageUrl = process.env.REACT_APP_LOGO_URL;
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
        <Image src={imageUrl} maw="20%" />
        <Anchor
          href={process.env.REACT_APP_GITHUB_URL}
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
