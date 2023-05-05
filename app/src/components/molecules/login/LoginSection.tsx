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
import { Cross1Icon } from "@radix-ui/react-icons";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  showLoginErrorNotification,
  validateForm,
  validateLoginPassword,
  validateUsername,
} from "../../../helpers/login-helpers";
import UserDataService from "../../../service/UserDataService";
import { useLoginStyles } from "../../../styles/login-style";

const LoginSection = () => {
  const { classes } = useLoginStyles();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
    isEntered: false,
  });
  const navigate = useNavigate();

  const handleLogin = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoginValues({ ...loginValues, isEntered: true });
    if (!validateForm(loginValues.username, loginValues.password)) {
      showLoginErrorNotification(
        "Make sure all errors are cleared! 🔧",
        "Oops",
        <Cross1Icon />
      );
      return;
    }
    UserDataService.authenticate(loginValues.username, loginValues.password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        if (error.response.data.errorMessage === `Incorrect username`) {
          showLoginErrorNotification(
            "Cannot find your account! 📕",
            "Oops",
            <Cross1Icon />
          );
        } else if (error.response.data.errorMessage === `Incorrect password`) {
          showLoginErrorNotification(
            "Incorrect password! 🖍️",
            "Oops",
            <Cross1Icon />
          );
        } else {
          showLoginErrorNotification(
            error.response.data.errorMessage,
            "Axios error",
            <Cross1Icon />
          );
        }
      });
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
          error={
            loginValues.isEntered
              ? validateUsername(loginValues.username, "username")
              : undefined
          }
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
          onChange={(event) => {
            setLoginValues({
              ...loginValues,
              [event.target.name]: event.target.value,
            });
          }}
        />
        <PasswordInput
          name="password"
          error={
            loginValues.isEntered
              ? validateLoginPassword(loginValues.password, "password")
              : undefined
          }
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
          onClick={(event) => {
            handleLogin(event);
          }}
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
