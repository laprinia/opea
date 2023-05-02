import { createStyles } from "@mantine/core";

export const useLoginStyles = createStyles((theme) => ({
  button: {
    color: theme.colors["offWhite"],
    backgroundColor: theme.colors["orangeJelly"],
  },
  textInput: {
    fontSize: "20px",
    backgroundColor: `rgba(24,24,24,0.5)`,
    color: theme.colors["offWhite"],
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
    backdropFilter: `blur(5px)`,
  },
  innerInput: {
    color: theme.colors["offWhite"],
    fontSize: "24px",
  },
  textLabel: {
    color: theme.colors["offWhite"],
  },
}));
