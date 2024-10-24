import { useEffect, useState } from "react";
import moviesAPI from "../services/moviesAPI";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
const accountId = import.meta.env.accountId;

//Use same logic as for Student cohort to pass id when clicking on name

export default function MovieDetails() {
  const { getMovieDetails } = moviesAPI();
  const [movieDetails, setMovieDetails] = useState({});

  //const { watchlistAdd, setWatchlistAdd } = useState([]);

  const { movie_id } = useParams();
  const setWatchlistAdd = [];

  const navigate = useNavigate();

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const addToWatchlistOptions = {
    method: "POST",
    url: `https://api.themoviedb.org/3/account/${accountId}/watchlist`,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    data: { media_type: "movie", media_id: `${movie_id}`, watchlist: true },
  };

  const removeFromWatchlistOptions = {
    method: "POST",
    url: `https://api.themoviedb.org/3/account/${accountId}/watchlist`,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    data: { media_type: "movie", media_id: `${movie_id}`, watchlist: false },
  };

  useEffect(() => {
    const listMovieDetails = async () => {
      await axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          setMovieDetails(res.data);
        })
        .catch((err) => console.error(err));
    };
    listMovieDetails();
  }, []);

  const addToWatchlist = async () => {
    await axios
      .request(addToWatchlistOptions)
      .then((res) => {
        console.log(res.data);
        //setWatchlistAdd(res.data);
      })
      .catch((err) => console.error(err));
  };

  const removeFromWatchlist = async () => {
    await axios
      .request(removeFromWatchlistOptions)
      .then((res) => {
        console.log(res.data);
        //setWatchlistAdd(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <img
        className="movieDetailsImage"
        src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
      />
      <p>{movieDetails.title}</p>
      <p>{movieDetails.tagline}</p>
      <p>{movieDetails.vote_average}</p>
      <p>{movieDetails.release_date}</p>
      <p>{movieDetails.overview}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          addToWatchlist();
        }}
      >
        Add to Watchlist
      </button>
      <button
        onClick={() => {
          removeFromWatchlist();
          navigate(-1);
        }}
      >
        Remove from Watchlist
      </button>
    </div>
  );
}
