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
import { useLoginStyles } from "../../styles/login-style";

const LoginCard = () => {
  const { classes } = useLoginStyles();
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
        <Title order={1} align="center" color="offWhite">
          Nice to see you!
        </Title>
        <Space />
        <Title order={4} color="offWhite">
          Enter you credentials to start swatching
        </Title>
        <TextInput
          size="md"
          withAsterisk
          label="username"
          error="An error will be here"
          inputWrapperOrder={["label", "input", "error"]}
          radius="lg"
          classNames={{ input: classes.textInput, label: classes.textLabel }}
        />
        <PasswordInput
          size="md"
          withAsterisk
          label=" password"
          radius="lg"
          classNames={{ input: classes.textInput, label: classes.textLabel }}
        />
        <Button
          variant="light"
          size="md"
          radius="lg"
          className={classes.button}
        >
          Login
        </Button>

        <Space h="xl" />
        <Anchor
          href="https://mantine.dev/"
          target="_blank"
          align="center"
          color="offWhite"
        >
          Not a swatcher? Sign up!
        </Anchor>
      </Stack>
    </Card>
  );
};

export default LoginCard;
