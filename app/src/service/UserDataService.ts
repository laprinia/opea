import http from "./http-common";

class UserDataService {
  get(id: number) {
    return http.get(`/users/get/${id}`);
  }
  create(data: any) {
    return http.post("/users/create", data);
  }
  update(id: number, data: any) {
    return http.put(`/users/update/${id}`, data);
  }
}

export default new UserDataService();
