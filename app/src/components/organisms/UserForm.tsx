import { Center, Container, Loader } from "@mantine/core";
import React, { useEffect, useState } from "react";

import { defaultImage } from "../../consts";
import UnsplashDataService from "../../service/UnsplashDataService";

const UserForm = (props: React.PropsWithChildren) => {
  const [imageUrl, setImageUrl] = useState("");
  const loadImage = async () => {
    UnsplashDataService.getRandomImage(
      "art",
      "XMVx19Hb97aiH3lFOacUOunxcPH8zlyDrUx8S8X2uNo"
    )
      .then((response) => {
        setImageUrl(response.data.links.download);
      })
      .catch((error) => {
        setImageUrl(defaultImage);
        console.log(error);
      });
  };
  useEffect(() => {
    loadImage();
  }, []);

  useEffect(() => {
    console.log("Reloading");
  }, [imageUrl]);

  if (imageUrl === "")
    return (
      <Container
        mih="100vh"
        maw="100vw"
        bg="offBlack"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Center mih="100vh" maw="100vw">
          <Loader
            sx={{ width: "10%", height: "10%" }}
            color="orangeJelly"
          ></Loader>
        </Center>
      </Container>
    );
  return (
    <Container
      mih="100vh"
      maw="100vw"
      sx={{
        backgroundImage: `url(
            ${imageUrl}
          ) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Center mih="100vh" maw="100vw">
        {props.children}
      </Center>
    </Container>
  );
};

export default UserForm;
