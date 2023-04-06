import { Global } from "@mantine/core";
import regular from "./JustSans.woff2";
const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Just Sans",
            src: `url('${regular}') format("woff2")`,
            fontWeight: 200,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
};

export default CustomFonts;
