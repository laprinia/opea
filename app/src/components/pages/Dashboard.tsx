import { Container, Space, Stack, Text } from "@mantine/core";
import React, { useEffect } from "react";

import useJWT from "../../hooks/useJWT";
import NavBar from "../molecules/NavBar";

const Dashboard = () => {
  const { username, isAuth } = useJWT();
  useEffect(() => {
    console.log(`Hi ${username}`);
  }, [isAuth]);
  return (
    <NavBar>
      <Space h="300px" />
      <Text size="400px" align="center">{`Hi ${username}`}</Text>
    </NavBar>
  );
};

export default Dashboard;
