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
            "#F0F0F5",
            "#D4D4E2",
            "#B9B9D0",
            "#9D9DBE",
            "#8282AB",
            "#666699",
            "#52527A",
            "#3D3D5C",
            "#29293D",
            "#14141F",
          ],
          blueJelly: [
            "#E8F2FD",
            "#BEDCF9",
            "#94C5F4",
            "#6BAEF0",
            "#4198EC",
            "#1781E8",
            "#1367B9",
            "#0E4D8B",
            "#09345D",
            "#051A2E",
          ],
          greenJelly: [
            "#E8FCF2",
            "#BFF8D9",
            "#96F3C1",
            "#6CEEA9",
            "#43EA91",
            "#1AE579",
            "#15B761",
            "#108949",
            "#0A5C30",
            "#052E18",
          ],
          yellowJelly: [
            "#FFF9E6",
            "#FEEEB9",
            "#FDE38C",
            "#FCD85F",
            "#FBCD32",
            "#FAC205",
            "#C89B04",
            "#967403",
            "#644E02",
            "#322701",
          ],
          orangeJelly: [
            "#FFEFE6",
            "#FED2B9",
            "#FDB58C",
            "#FC985E",
            "#FC7B31",
            "#FB5D04",
            "#C94B03",
            "#973802",
            "#642502",
            "#321301",
          ],
          offWhite: [
            "#F5F0EF",
            "#E3D6D3",
            "#D2BCB7",
            "#C0A29B",
            "#AE887F",
            "#9C6D63",
            "#7D574F",
            "#5E423B",
            "#3E2C28",
            "#1F1614",
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
