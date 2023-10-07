import http from "./httpService";
const apiEndPoint = "/users";

export async function register(user) {
  return http.post(apiEndPoint, {
    name: user.name,
    password: user.password,
    email: user.username,
    contact: user.contact,
  });
}

export async function getUser() {
  return http.get(apiEndPoint + "/me");
}
