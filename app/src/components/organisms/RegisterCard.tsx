import React from "react";
import { Card } from "@mantine/core";
import SideSection from "../molecules/SideSection";
import RegisterSection from "../molecules/RegisterSection";

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
      <SideSection isReversed />
      <RegisterSection />
    </Card>
  );
};

export default LoginCard;
