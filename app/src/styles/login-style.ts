import { createStyles } from "@mantine/core";

export const useLoginStyles = createStyles((theme) => ({
  button: {
    color: theme.colors["offWhite"],
    backgroundColor: theme.colors["orangeJelly"],
  },
  textInput: {
    fontSize: "14px",
    backgroundColor: `rgba(24,24,24,0.5)`,
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
    backdropFilter: `blur(5px)`,
  },
  textLabel: {
    color: theme.colors["offWhite"],
  },
}));
