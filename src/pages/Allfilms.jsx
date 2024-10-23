import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const apiURL =
  "https://api.themoviedb.org/3/movie/11?api_key=131688ac6a00979794ac0b05daa54847";

function Allfilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setFilms(response.data);
    });
  }, []);

  return (
    <div>
      <p> Hello welcome to the movie database</p>
      <p>{films.title}</p>
    </div>
  );
}

export default Allfilms;
