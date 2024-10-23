import { useEffect, useState } from "react";
import moviesAPI from "../services/moviesAPI";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;

//Use same logic as for Student cohort to pass id when clicking on name

export default function MovieDetails() {
  const { getMovieDetails } = moviesAPI();
  const [movieDetails, setMovieDetails] = useState({});

  const { movie_id } = useParams();

  const navigate = useNavigate();

  /*
  useEffect(() => {
    getMovieDetails().then((resp) => {
      setMovieDetails(resp.data);
    });
  }, []);
  */
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  //   axios
  //     .request(options)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.error(err));

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

  //let releaseDate = movieDetails.release_date;
  //let releaseYear = releaseDate.slice(0, 3);

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
      <button>Add to Watchlist</button>
    </div>
  );
}
