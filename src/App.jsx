import { useEffect, useState } from "react";
import "./App.css";
import Allfilms from "./pages/Allfilms";
import moviesAPI from "./services/moviesAPI";
import Discover from "./pages/ListMoviesByGenre";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllMovieGenres from "./pages/AllMovieGenres";
import ListMoviesByGenre from "./pages/ListMoviesByGenre";
import MovieDetails from "./pages/Moviedetails";

function App() {
  /*
  const { getMoviesGenre } = moviesAPI();
  const [genre, setGenre] = useState([]);

  const movie_id = 11;
*/

  /*
  useEffect(() => {
    getMoviesGenre().then((resp) => console.log(resp));
  }, []);
  */

  /*
  useEffect(() => {
    getMoviesGenre().then((resp) => {
      setGenre(resp.data.genres);
    });
  }, []);
  */

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Allfilms />} />
        <Route path="/genres" element={<AllMovieGenres />} />
        <Route path="/genres/:genreID" element={<ListMoviesByGenre />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movies/:movie_id" element={<MovieDetails />} />
      </Routes>

      {/* <Allfilms /> */}
      {/* 
        {genre &&
          genre.map((g, i) => {
            return (
              <div key={i}>
                <ul>
                  <li>{g.name}</li>
                </ul>
              </div>
            );
          })}
            */}
    </>
  );
}

export default App;
