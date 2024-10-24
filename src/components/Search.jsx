import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
import axios from "axios";
import { Link } from "react-router-dom";

//Need to hide apiKey
//Need to make query string dynamic
//what to do about pages

function Search() {
  const [searchMovie, setSearchMovie] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  //const searchTitle = "Lord of the rings";

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: `${searchQuery}`,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    const updateMovieSearch = async () => {
      await axios
        .request(options)
        .then((res) => {
          console.log(res.data.results);
          setSearchMovie(res.data.results);
        })
        .catch((err) => console.error(err));
    };
    updateMovieSearch();
  }, [searchQuery]);

  return (
    <>
      <h1>Search Results</h1>
      <div className="searchbar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button onClick={() => setSearchQuery("")}>Clear Search</button>
      </div>

      {searchMovie.map((mov) => {
        return (
          <Link to={`/movies/` + mov.id}>
            <div key={mov.id}>
              <img
                className="searchResultsImage"
                src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
              />
              <p>{mov.title}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Search;
