const baseURL = import.meta.env.VITE_MOVIES_API_BASE_URL;
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
const accountId = import.meta.env.accountId;
const movie_id = 11;
import axios from "axios";

console.log(baseURL, apiKey);

export default function moviesAPI() {
  const getMoviesGenre = () => {
    return axios.get(`${baseURL}/genre/movie/list`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
  };

  const getMovieDetails = () => {
    return axios.get(`${baseURL}/movie/${movie_id}`, {
      headers: {
        Authorization: apiKey,
      },
    });
  };

  return {
    getMoviesGenre,
    getMovieDetails,
  };
}
