import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ListMoviesByGenre() {
  const [discoverMovie, setDiscoverMovie] = useState([]);
  const { genreID } = useParams();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: genreID,
    },

    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  /*
  axios
    .request(options)
    .then((res) => console.log(res.data.results))
    .catch((err) => console.error(err));
*/

  useEffect(() => {
    const listMovies = async () => {
      await axios
        .request(options)
        .then((res) => {
          console.log(res.data.results);
          setDiscoverMovie(res.data.results);
        })
        .catch((err) => console.error(err));
    };
    listMovies();
  }, []);

  return (
    <div>
      {discoverMovie.map((mov) => {
        return (
          <div key={mov.id}>
            <Link to={`/movies/` + mov.id}>
              <img
                className="movieListIcons"
                src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
              />

              <p>{mov.title}</p>
            </Link>
            <p>{mov.vote_average}</p>
          </div>
        );
      })}
    </div>
  );
}
