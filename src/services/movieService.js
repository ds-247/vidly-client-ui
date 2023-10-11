import http from "./httpService";
const apiEndPoint = "/movies";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(id) {
  const response = http.get(apiEndPoint + "/" + id);
  return response;
}
