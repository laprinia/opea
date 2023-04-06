import React from "react";
import Components from "./components/Components";
import CustomFonts from "./fonts/CustomFonts";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light", fontFamily: "Just Sans" }}
    >
      <CustomFonts />
      <Components />
    </MantineProvider>
  );
};

export default App;
