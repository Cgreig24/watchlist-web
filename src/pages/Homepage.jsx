import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

function Homepage() {
  const [films, setFilms] = useState([]);

  {
    /* 
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setFilms(response.data);
    });
  }, []);
*/
  }
  return (
    <>
      <div>
        <p> Hello welcome to the movie database</p>
        <p>
          Search for a film to get started or{" "}
          <Link to="/genres">browse by genre</Link>
        </p>
        <Search />
      </div>
    </>
  );
}

export default Homepage;
