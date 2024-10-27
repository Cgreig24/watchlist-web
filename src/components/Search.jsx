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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //const searchTitle = "Lord of the rings";

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((next) => next + 1);
    }
  };

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: `${searchQuery}`,
      include_adult: "true",
      language: "en-US",
      page: `${currentPage}`,
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
          setTotalPages(res.data.total_pages);
          console.log(totalPages);
        })
        .catch((err) => console.error(err));
    };
    updateMovieSearch();
  }, [searchQuery, currentPage]);

  return (
    <>
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

      {searchQuery.length > 0 && (
        <div className="searchResultsMovieContainer">
          <h3>Search Results</h3>
          <div className="searchResultsMovieCard">
            {searchMovie.length < 1 && searchQuery.length > 0 ? (
              <p>No results found</p>
            ) : (
              searchMovie.map((mov) => (
                <Link to={`/movies/` + mov.id}>
                  <div className="searchResultsMovie" key={mov.id}>
                    <img
                      className="searchResultsImage"
                      src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
                    />
                    <div className="searchResultsMovieInfo">
                      <h4>{mov.title}</h4>
                      <p>{mov.release_date}</p>
                      <p>{mov.vote_average}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      )}

      <div className="pageButtons">
        {currentPage > 1 && (
          <button className="prevpageButton" onClick={previousPage}>
            Previous
          </button>
        )}

        {searchMovie.length > 0 && <p>Page {currentPage}</p>}

        {currentPage < totalPages && (
          <button className="nextPageButton" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Search;
