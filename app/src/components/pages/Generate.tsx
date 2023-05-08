import { Card, Container, Stack } from "@mantine/core";
import React, { useEffect } from "react";

import useJWT from "../../hooks/useJWT";
import NavBar from "../molecules/NavBar";
import ColorSection from "../molecules/generate/ColorSection";
import ControlSection from "../molecules/generate/ControlSection";

const Generate = () => {
  const { username, isAuth } = useJWT();
  useEffect(() => {
    console.log(`Hi ${username}`);
  }, [isAuth]);
  return (
    <NavBar>
      <Stack align="center" justify="center">
        <Card
          shadow="sm"
          mt="xl"
          radius="lg"
          mih="80vh"
          miw="70vw"
          sx={{
            background: `rgba(24,24,24,0.5)`,
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
            backdropFilter: `blur(2px)`,
          }}
        >
          <ControlSection />
          <ColorSection />
        </Card>
      </Stack>
    </NavBar>
  );
};

export default Generate;
