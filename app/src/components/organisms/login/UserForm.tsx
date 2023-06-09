import { Center, Container } from "@mantine/core";
import React, { useEffect, useState } from "react";

import { defaultImage } from "../../../consts";
import UnsplashDataService from "../../../service/UnsplashDataService";

const UserForm = (props: React.PropsWithChildren) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);
  const loadImage = async () => {
    UnsplashDataService.getRandomImage(
      "painting",
      process.env.REACT_APP_UNSPLASH_API_CLIENT_ID || ""
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
    setIsImageLoading(false);
  }, [imageUrl]);

  return (
    <Container
      mih="100vh"
      maw="100vw"
      sx={
        !isImageLoading
          ? {
              backgroundImage: `url(
            ${imageUrl}
          ) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : {
              backgroundColor: "#000000",
            }
      }
    >
      <Center mih="100vh" maw="100vw">
        {props.children}
      </Center>
    </Container>
  );
};

export default UserForm;
