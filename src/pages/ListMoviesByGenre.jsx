import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Progress from "../components/Progress";

export default function ListMoviesByGenre() {
  const [discoverMovie, setDiscoverMovie] = useState([]);
  const { genreID } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [progress, setProgress] = useState(0);

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

  const getColorByRating = (rating) => {
    if (rating >= 9) return "#05e205";
    if (rating >= 8) return "#538000";
    if (rating >= 7) return "#4f8000";
    if (rating >= 6) return "#adc90b";
    if (rating >= 5) return "#d4b500";
    if (rating >= 4) return "#c98302";
    if (rating >= 3) return "#c26d0c";
    if (rating >= 2) return "#940505";
    if (rating >= 1) return "#2b0101";
  };

  return (
    <div className="searchResultsMovieContainer">
      <div className="searchResultsMovieCard">
        {discoverMovie.map((mov) => {
          const voteAverage = mov.vote_average ? mov.vote_average * 10 : 0;
          const color = getColorByRating(mov.vote_average);
          return (
            <div className="searchResultsMovie" key={mov.id}>
              <Link to={`/movies/` + mov.id}>
                <img
                  className="searchResultsImage"
                  src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
                />
                <div className="searchResultsMovieInfo">
                  <h4>{mov.title}</h4>
                  <p>
                    {" "}
                    {mov.release_date
                      ? mov.release_date.substring(0, 4)
                      : "N/A"}
                  </p>
                  <p>
                    {mov.vote_average ? mov.vote_average.toFixed(1) : "N/A"}
                  </p>
                  <div className="App">
                    <Progress
                      id="progress-bar"
                      present={voteAverage}
                      color={color}
                    />
                  </div>
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
