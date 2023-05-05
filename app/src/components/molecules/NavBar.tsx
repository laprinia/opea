import { Badge, Group, Text } from "@mantine/core";
import React from "react";

import NavButton from "../atoms/NavButton";

const NavBar = () => {
  return (
    <Group
      position="apart"
      mih="50px"
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
        size="xl"
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
  );
};
export default NavBar;
