import axios from "axios";
import { useEffect, useState } from "react";
import moviesAPI from "../services/moviesAPI";
import { Link } from "react-router-dom";

export default function AllMovieGenres() {
  const { getMoviesGenre } = moviesAPI();

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getMoviesGenre().then((resp) => {
      setGenre(resp.data.genres);
    });
  }, []);

  return (
    <div>
      {genre &&
        genre.map((g, i) => {
          return (
            <div key={i}>
              <ul>
                <Link to={`/genres/` + g.id}>{g.name}</Link>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
