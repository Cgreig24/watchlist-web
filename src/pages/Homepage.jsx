import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Search from "../components/Search";

function Homepage() {
  const [films, setFilms] = useState([]);

  return (
    <>
      <div>
        <div className="homepageIntro">
          <h1>Welcome to Watchlist Web!</h1>
          <h2>
            Search for a film to get started or{" "}
            <Link to="/genres">browse by genre</Link>
          </h2>
        </div>
        <Search />
      </div>
    </>
  );
}

export default Homepage;
