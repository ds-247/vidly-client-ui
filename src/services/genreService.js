import http from "../services/httpService";
const endPoint = "/genres";

export async function getGenres() {
  return http.get(endPoint);
}
