import { notifications } from "@mantine/notifications";

export const showLoginErrorNotification = (
  message: string,
  title: string,
  icon: JSX.Element
) => {
  notifications.show({
    radius: "lg",
    message: message,
    title: title,
    icon: icon,
    color: "orangeJelly",
    autoClose: 5000,
    styles: (theme) => ({
      root: {
        backgroundColor: `rgba(24,24,24,0.5)`,
        color: "offWhite",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        backdropFilter: `blur(5px)`,
      },
      title: {
        color: theme.colors["offWhite"],
        fontSize: "20px",
      },
      description: {
        color: theme.colors["offWhite"],
        fontSize: "16px",
      },
    }),
  });
};

const passwordRegex = new RegExp(
  '^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&? "]).*$'
);
export const validateUsername = (input: string, referTo: string) => {
  if (input.length === 0) return `Please enter ${referTo}`;
  return "";
};
export const validateLoginPassword = (input: string, referTo: string) => {
  if (input.length === 0) return `Please enter ${referTo}`;
};
export const validateRegisterPassword = (input: string, referTo: string) => {
  if (input.length === 0) return `Please enter ${referTo}`;
  if (!passwordRegex.test(input))
    return `Must contain 8 chars and at least 1 number, 1 letter and 1 unique`;
  return "";
};

export const validateForm = (
  username: string,
  password: string,
  confirmPassword?: string
) => username != "" && password != "" && confirmPassword != "";
