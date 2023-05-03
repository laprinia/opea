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
import React, { useState } from "react";
import { useLoginStyles } from "../../styles/login-style";
import UserDataService from "../../service/UserDataService";
const LoginSection = () => {
  const { classes } = useLoginStyles();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const handleLogin = (event: Event) => {
    UserDataService.get(0)
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
    event.preventDefault();
  };
  return (
    <Card.Section sx={{ width: "70%", marginLeft: "30%" }}>
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
          Enter you credentials to start swatching:
        </Title>
        <TextInput
          name="username"
          size="md"
          withAsterisk
          label="username"
          inputWrapperOrder={["label", "input", "error"]}
          radius="lg"
          color="offWhite"
          classNames={{
            input: classes.textInput,
            label: classes.textLabel,
          }}
        />
        <PasswordInput
          name="password"
          size="md"
          withAsterisk
          label=" password"
          radius="lg"
          classNames={{
            input: classes.textInput,
            label: classes.textLabel,
            innerInput: classes.innerInput,
          }}
          onChange={(event) => {
            setLoginValues({
              ...loginValues,
              [event.target.name]: event.target.value,
            });
          }}
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
          href={`http://localhost:3000/register`}
          align="center"
          color="offWhite"
        >
          Not a swatcher? Sign up!
        </Anchor>
      </Stack>
    </Card.Section>
  );
};
export default LoginSection;
