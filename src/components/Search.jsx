import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
import axios from "axios";

//Need to hide apiKey
//Need to make query string dynamic
//what to do about pages

function Search() {
  const [searchMovie, setSearchMovie] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: "Lord%20of%20the%20rings",
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}

export default Search;
