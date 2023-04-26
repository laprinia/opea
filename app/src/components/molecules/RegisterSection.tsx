import {
  Anchor,
  Button,
  Card,
  PasswordInput,
  Space,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { useLoginStyles } from "../../styles/login-style";
const RegisterSection = () => {
  const { classes } = useLoginStyles();
  return (
    <Card.Section sx={{ width: "70%" }}>
      <Stack
        spacing="md"
        align="stretch"
        justify="center"
        ml="5vw"
        mr="5vw"
        mih="50vh"
      >
        <Title order={1} align="center" color="offWhite">
          Nice to meet you!
        </Title>
        <Space />
        <Title order={4} color="offWhite">
          Enter you credentials to start swatching:
        </Title>
        <TextInput
          size="md"
          withAsterisk
          label="username"
          error="An error will be here"
          inputWrapperOrder={["label", "input", "error"]}
          radius="lg"
          color="offWhite"
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
          Register
        </Button>
        <Space h="xl" />
        <Anchor
          href="https://mantine.dev/"
          target="_blank"
          align="center"
          color="offWhite"
        >
          Already a swatcher? Sign in!
        </Anchor>
      </Stack>
    </Card.Section>
  );
};
export default RegisterSection;
