import { Badge, Container, Group, Text } from "@mantine/core";
import React from "react";

import NavButton from "../atoms/NavButton";

const NavBar = (props: React.PropsWithChildren) => {
  const imageUrl = "https://i.imgur.com/GJEzc3f.png";
  return (
    <Container
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
        mih="60px"
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
        <NavButton text={"dashboard"} color={"offBlack"} />
        <Group position="apart" spacing="sm">
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
      <Container>{props.children}</Container>
    </Container>
  );
};
export default NavBar;
