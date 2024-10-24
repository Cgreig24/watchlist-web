import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
const accountId = import.meta.env.accountId;

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const { id } = watchlist;

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies`,
    params: { language: "en-US", page: "1", sort_by: "created_at.asc" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey} `,
    },
  };

  useEffect(() => {
    const listWatchlist = async () => {
      await axios
        .request(options)
        .then((res) => {
          console.log(res.data.results);
          setWatchlist(res.data.results);
        })
        .catch((err) => console.error(err));
    };
    listWatchlist();
  }, []);

  const removeFromWatchlist = async (movieId) => {
    const removeFromWatchlistOptions = {
      method: "POST",
      url: `https://api.themoviedb.org/3/account/${accountId}/watchlist`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: { media_type: "movie", media_id: movieId, watchlist: false },
    };
    try {
      await axios.request(removeFromWatchlistOptions);
      setWatchlist((prevWatchlist) =>
        prevWatchlist.filter((mov) => mov.id !== movieId)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Here is your watchlist</h1>
      <div className="searchResultsMovieContainer">
        <div className="searchResultsMovieCard">
          {watchlist.map((mov) => {
            return (
              <div className="searchResultsMovie" key={mov.id}>
                <Link to={`/movies/` + mov.id}>
                  <img
                    className="searchResultsImage"
                    src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
                  />
                  <p>{mov.title}</p>
                </Link>
                <button onClick={() => removeFromWatchlist(mov.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
