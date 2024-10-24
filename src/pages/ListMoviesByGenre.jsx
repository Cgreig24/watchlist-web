import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ListMoviesByGenre() {
  const [discoverMovie, setDiscoverMovie] = useState([]);
  const { genreID } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: `${currentPage}`,
      sort_by: "popularity.desc",
      with_genres: genreID,
    },

    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

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

  useEffect(() => {
    const listMovies = async () => {
      await axios
        .request(options)
        .then((res) => {
          console.log(res.data.results);
          setDiscoverMovie(res.data.results);
          setTotalPages(res.data.total_pages);
        })
        .catch((err) => console.error(err));
    };
    listMovies();
  }, [currentPage]);

  return (
    <div className="searchResultsMovieContainer">
      <div className="searchResultsMovieCard">
        {discoverMovie.map((mov) => {
          return (
            <div className="searchResultsMovie" key={mov.id}>
              <Link to={`/movies/` + mov.id}>
                <img
                  className="searchResultsImage"
                  src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
                />
                <div className="searchResultsMovieInfo">
                  <p>{mov.title}</p>
                  <p>{mov.vote_average}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="pageButtons">
        {currentPage > 1 && (
          <button className="prevpageButton" onClick={previousPage}>
            Previous
          </button>
        )}
        <p>Page {currentPage}</p>

        {currentPage < totalPages && (
          <button className="nextPageButton" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
