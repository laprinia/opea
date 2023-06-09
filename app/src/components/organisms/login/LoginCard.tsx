import { Card } from "@mantine/core";
import React from "react";

import LoginSection from "../../molecules/login/LoginSection";
import SideSection from "../../molecules/login/SideSection";

const LoginCard = () => {
  return (
    <Card
      shadow="sm"
      mt="xl"
      radius="lg"
      mih="50vh"
      miw="40vw"
      sx={{
        background: `rgba(24,24,24,0.5)`,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        backdropFilter: `blur(5px)`,
      }}
    >
      <SideSection />
      <LoginSection />
    </Card>
  );
};

export default LoginCard;
