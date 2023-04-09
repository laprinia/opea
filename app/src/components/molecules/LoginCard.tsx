import React from "react";
import {
  Anchor,
  Stack,
  Card,
  TextInput,
  Button,
  PasswordInput,
  Title,
  Space,
} from "@mantine/core";

const LoginCard = () => {
  return (
    <Card
      shadow="sm"
      mt="xl"
      radius="lg"
      mih="50vh"
      miw="30vw"
      sx={{
        background: `rgba(24,24,24,0.5)`,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        backdropFilter: `blur(5px)`,
      }}
    >
      <Stack
        spacing="md"
        align="stretch"
        justify="center"
        ml="5vw"
        mr="5vw"
        mih="50vh"
      >
        <Title order={1} align="center">
          Nice to see you!
        </Title>
        <Space />
        <Title order={4}>Enter you credentials to start swatching</Title>
        <TextInput
          size="md"
          withAsterisk
          label="username"
          error="error"
          inputWrapperOrder={["label", "input", "error"]}
          radius="lg"
          sx={{ fontSize: "14px" }}
        />
        <PasswordInput
          size="md"
          withAsterisk
          label=" password"
          radius="lg"
          sx={{ fontSize: "14px" }}
        />
        <Button variant="light" size="md" radius="lg">
          Login
        </Button>

        <Space h="xl" />
        <Anchor href="https://mantine.dev/" target="_blank" align="center">
          Not a swatcher? Sign up!
        </Anchor>
      </Stack>
    </Card>
  );
};

export default LoginCard;
