import React from "react";
import Components from "./components/Components";
import CustomFonts from "./fonts/CustomFonts";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Just Sans",
        colors: {
          offBlack: [
            "#040406",
            "#040406",
            "#040406",
            "#040406",
            "#040406",
            "#040406",
            "#040406",
            "#040406",
            "#040406",
            "#040406",
          ],
          blueJelly: [
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
            "#0e4e8c",
          ],
          greenJelly: [
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
            "#0c6a38",
          ],
          yellowJelly: [
            "#fac205",
            "#fac205",
            "#fac205",
            "#fac205",
            "#fac205",
            "#FAC205",
            "#fac205",
            "#fac205",
            "#fac205",
            "#fac205",
          ],
          orangeJelly: [
            "#fb6008",
            "#fb6008",
            "#fb6008",
            "#fb6008",
            "#fb6008",
            "#fb6008",
            "#fb6008",
            "#fb6008",
            "#fb6008",
            "#fb6008",
          ],
          offWhite: [
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
            "#ece3e1",
          ],
        },
      }}
    >
      <CustomFonts />
      <Components />
    </MantineProvider>
  );
};

export default App;
