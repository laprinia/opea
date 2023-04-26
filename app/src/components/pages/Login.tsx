import React from "react";
import LoginCard from "../organisms/LoginCard";
import { Center, Container } from "@mantine/core";

const randomizedArtUrl =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F12%2FClassic-Art-Background-HD.jpg&f=1&nofb=1&ipt=60b93d2febd088c5dadea3db3d119719f3a8da37626e95e37e82738cfba9b6bd&ipo=images";
const Login = () => {
  return (
    <Container
      mih="100vh"
      maw="100vw"
      sx={{
        backgroundImage: `url(
            ${randomizedArtUrl}
          ) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Center mih="100vh" maw="100vw">
        <LoginCard />
      </Center>
    </Container>
  );
};

export default Login;
