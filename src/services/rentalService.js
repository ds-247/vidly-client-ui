import http from "./httpService";
import { toast } from "react-toastify";
const apiEndPoint = "/rentals";

export async function getPrevRentals() {
  const response = await http.get(`${apiEndPoint}/prevRentals`);
  return response;
}

export async function getCurRentals() {
  const response = await http.get(`${apiEndPoint}/currentRentals`);
  return response;
}

export async function returnMovie(rental) {
  try {
    const response = await http.put(`${apiEndPoint}/return/${rental.movieId}`);
    // Check the response status code
    toast.success(response.data, {
      position: "bottom-left",
      autoClose: 4000,
    });
  } catch (error) {
    toast.error(error.response.data, {
      position: "bottom-left",
      autoClose: 4000,
    });
  }
}

export async function rent(movie) {
  try {
    const response = await http.put(`${apiEndPoint}/rent/${movie._id}`);
    // console.log(response.data);
    toast.success(response.data, {
      position: "bottom-left",
      autoClose: 4000,
    });
  } catch (error) {
    // console.log(error.response.data);
    toast.error(error.response.data, {
      position: "bottom-left",
      autoClose: 4000,
    });
  }
}
