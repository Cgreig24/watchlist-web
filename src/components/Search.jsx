import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
import axios from "axios";

//Need to hide apiKey
//Need to make query string dynamic
//what to do about pages

function Search() {
  const [searchMovie, setSearchMovie] = useState([]);

  const searchTitle = "Lord of the rings";

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: `${searchTitle}`,
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
  }, []);

  return (
    <>
      <h1>Search Results</h1>

      {searchMovie.map((mov) => {
        return (
          <div key={mov.id}>
            <p>{mov.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Search;
