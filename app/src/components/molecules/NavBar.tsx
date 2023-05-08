import { Badge, Container, Group, Space, Stack, Text } from "@mantine/core";
import React from "react";

import NavButton from "../atoms/NavButton";

const NavBar = (props: React.PropsWithChildren) => {
  const imageUrl = "https://i.imgur.com/GJEzc3f.png";
  return (
    <Stack
      mih="100vh"
      maw="100vw"
      sx={{
        backgroundImage: `url(
            ${imageUrl}
          ) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Group
        position="apart"
        mih="3vh"
        maw="100vw"
        sx={{
          marginLeft: "10px",
          marginRight: "10px",
          background: `rgba(0,0,0,0)`,
          top: 0,
          right: 0,
          boxSizing: "border-box",
        }}
      >
        <Text
          variant="gradient"
          size="40px"
          gradient={{ from: "offBlack", to: "orangeJelly", deg: 40 }}
        >
          opea
        </Text>
        <Group>
          <Space w="5vw" />
          <NavButton text={"dashboard"} color={"offBlack"} />
        </Group>
        <Group position="apart" spacing="sm" align="center">
          <NavButton text={"generate"} color={"offBlack"} />
          <NavButton text={"buckets"} color={"offBlack"} />
          <Badge
            color="greenJelly"
            variant="light"
            styles={(theme) => ({ inner: { color: theme.colors["offWhite"] } })}
          >
            dev
          </Badge>
        </Group>
      </Group>
      <Container maw="97vh" miw="100vw">
        {props.children}
      </Container>
    </Stack>
  );
};
export default NavBar;
