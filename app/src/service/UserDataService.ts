import http from "./http-common";

class UserDataService {
  get(id: number) {
    return http.get(`/users/get/${id}`);
  }
  checkUser() {
    return http.post(`/users/`);
  }
  authenticate(username: string, password: string) {
    return http.post(`/users/auth`, {
      username: username,
      password: password,
    });
  }
  create(data: any) {
    return http.post("/users/create", data);
  }
  update(id: number, data: any) {
    return http.put(`/users/update/${id}`, data);
  }
}

export default new UserDataService();
