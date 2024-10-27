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

  const getMovieGenreImage = {
    genres: [
      {
        id: 28,
        name: "Action",
        poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      },
      {
        id: 12,
        name: "Adventure",
        poster_path: "/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
      },
      {
        id: 16,
        name: "Animation",
        poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      },
      {
        id: 35,
        name: "Comedy",
        poster_path: "/vz3Vd6nfq9YZrVvyYx5RHFaYKV3.jpg",
      },
      {
        id: 80,
        name: "Crime",
        poster_path: "/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
      },
      {
        id: 99,
        name: "Documentary",
        poster_path: "/tTqI2xoB7cGO7HASB22Sss6x44J.jpg",
      },
      {
        id: 18,
        name: "Drama",
        poster_path: "/evKz85EKouVbIr51zy5fOtpNRPg.jpg",
      },
      {
        id: 10751,
        name: "Family",
        poster_path: "/t5v2Zsb5sa6PSP9jMUWY4GdIb3c.jpg",
      },
      {
        id: 14,
        name: "Fantasy",
        poster_path: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      },
      {
        id: 36,
        name: "History",
        poster_path: "/4Hi7yjiQjokEDStT1MOj5rPgRfW.jpg",
      },
      {
        id: 27,
        name: "Horror",
        poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
      },
      {
        id: 10402,
        name: "Music",
        poster_path: "/fMhOeJ2TvuY46iYGmsowhgRXfnr.jpg",
      },
      {
        id: 9648,
        name: "Mystery",
        poster_path: "/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
      },
      {
        id: 10749,
        name: "Romance",
        poster_path: "/y7iOVneBvITlBdhy6tVqXVOa1Js.jpg",
      },
      {
        id: 878,
        name: "Science Fiction",
        poster_path: "/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
      },
      {
        id: 10770,
        name: "TV Movie",
        poster_path: "/szefDW6E7DiZGivuu1U0ITsIT4s.jpg",
      },
      {
        id: 53,
        name: "Thriller",
        poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      },
      {
        id: 10752,
        name: "War",
        poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      },
      {
        id: 37,
        name: "Western",
        poster_path: "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      },
    ],
  };

  return {
    getMoviesGenre,
    getMovieDetails,
    getMovieGenreImage,
  };
}
