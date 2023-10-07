import http from "./httpService";
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
    if (response.status === 200) {
      console.log("Movie returned successfully.");
    } else {
      console.error("Unexpected response status code:", response.status);
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log("Movie is already returned.");
    } else {
      console.error("Error returning movie:", error.message);
    }
  }
}

export async function rent(movie) {
  try {
    const response = await http.put(`${apiEndPoint}/rent/${movie._id}`);

    // Check the response status code
    if (response.status === 200) {
      // Rental was successful, you can display a success message or perform any other actions
      console.log("Movie rented successfully.");
    } else {
      // Handle unexpected response status codes
      console.error("Unexpected response status code:", response.status);
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      // Movie is already rented, display a message or handle accordingly
      console.log("Movie is already rented.");
    } else {
      // Handle other errors
      console.error("Error renting movie:", error.message);
    }
  }
}
