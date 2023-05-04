import { useEffect, useState } from "react";

import UnsplashDataService from "../service/UnsplashDataService";

export default function useUnsplash() {
  // const loadImage = async () => {
  //   UnsplashDataService.getRandomImage(
  //     "art",
  //     "XMVx19Hb97aiH3lFOacUOunxcPH8zlyDrUx8S8X2uNo"
  //   )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   loadImage();
  // }, []);

  return { imageUrl: "", isImageLoading: true };
}
