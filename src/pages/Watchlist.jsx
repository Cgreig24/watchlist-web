import axios from "axios";
import { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
const accountId = import.meta.env.accountId;

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies`,
    params: { language: "en-US", page: "1", sort_by: "created_at.asc" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey} `,
    },
  };

  /*
  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

    */

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

  return (
    <>
      <h1>Here is your watchlist</h1>
      <div>
        {watchlist.map((mov) => {
          return (
            <div key={mov.id}>
              <p>{mov.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
