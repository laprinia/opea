import https from "./unsplash-common";

class UnsplashDataService {
  getRandomImage(query: string, clientId: string) {
    return https.get(`/photos/random?client_id=${clientId}&query=${query}`);
  }
}

export default new UnsplashDataService();
