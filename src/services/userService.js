import http from "./httpService";
import config from "../config.json";
const apiEndPoint = config["api-url"] + "/users";

export async function register(user) {
  return http.post(apiEndPoint, {
    name: user.name,
    password: user.password,
    email: user.username,
    contact: user.contact,
  });
}

export async function getUsers() {
  return http.get(apiEndPoint);
}
