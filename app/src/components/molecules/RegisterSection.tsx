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
import React, { FormEvent, useState } from "react";
import { useLoginStyles } from "../../styles/login-style";
import UserDataService from "../../service/UserDataService";
import {
  showErrorNotification,
  validateForm,
  validatePassword,
  validateUsername,
} from "../../helpers/login-helpers";
import { Cross1Icon } from "@radix-ui/react-icons";
const RegisterSection = () => {
  const { classes } = useLoginStyles();
  const [registerValues, setRegisterValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    isEntered: false,
  });

  const handleRegister = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setRegisterValues({ ...registerValues, ["isEntered"]: true });
    if (
      !validateForm(
        registerValues.username,
        registerValues.password,
        registerValues.confirmPassword
      )
    ) {
      showErrorNotification(
        "Make sure all errors are cleared! 🔧",
        "Oops",
        <Cross1Icon />
      );
      return;
    }
    if (registerValues.password !== registerValues.confirmPassword) {
      showErrorNotification(
        "Password should match! 🤥",
        "Oops",
        <Cross1Icon />
      );
      return;
    }
    if (
      registerValues.username.length < 4 ||
      registerValues.username.length > 15
    ) {
      showErrorNotification(
        "Username should have 4 to 15 chars! 🥹",
        "Oops",
        <Cross1Icon />
      );
      return;
    }
    UserDataService.create({
      username: registerValues.username,
      password: registerValues.password,
    })
      .then((res) => {})
      .catch((error) => {
        if (
          error.response.data.errorMessage ===
          `"username" is already a swatcher`
        ) {
          showErrorNotification(
            "Username is already taken! ⛳️",
            "Oops",
            <Cross1Icon />
          );
        } else {
          showErrorNotification(
            error.response.data.errorMessage,
            "Axios error",
            <Cross1Icon />
          );
        }
      });
  };
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
          name="username"
          error={
            registerValues.isEntered
              ? validateUsername(registerValues.username, "username")
              : undefined
          }
          size="md"
          withAsterisk
          label="username"
          inputWrapperOrder={["label", "input", "error"]}
          radius="lg"
          color="offWhite"
          classNames={{ input: classes.textInput, label: classes.textLabel }}
          onChange={(event) => {
            setRegisterValues({
              ...registerValues,
              [event.target.name]: event.target.value,
            });
          }}
        />
        <PasswordInput
          name="password"
          error={
            registerValues.isEntered
              ? validatePassword(registerValues.password, "password")
              : undefined
          }
          size="md"
          withAsterisk
          label=" password"
          radius="lg"
          color="offWhite"
          classNames={{
            input: classes.textInput,
            label: classes.textLabel,
            innerInput: classes.innerInput,
          }}
          onChange={(event) => {
            setRegisterValues({
              ...registerValues,
              [event.target.name]: event.target.value,
            });
          }}
        />
        <PasswordInput
          name="confirmPassword"
          error={
            registerValues.isEntered
              ? validatePassword(
                  registerValues.confirmPassword,
                  "password confirmation"
                )
              : undefined
          }
          size="md"
          withAsterisk
          label="confirm password"
          radius="lg"
          color="offWhite"
          classNames={{
            input: classes.textInput,
            label: classes.textLabel,
            innerInput: classes.innerInput,
          }}
          onChange={(event) => {
            setRegisterValues({
              ...registerValues,
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
            handleRegister(event);
          }}
        >
          Register
        </Button>
        <Space h="xl" />
        <Anchor
          href={`http://localhost:3000/login`}
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
