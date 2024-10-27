import axios from "axios";
import { useEffect, useState } from "react";
import moviesAPI from "../services/moviesAPI";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";

export default function AllMovieGenres() {
  const { getMoviesGenre, getMovieGenreImage } = moviesAPI();

  const [genre, setGenre] = useState([]);
  const [genreImage, setGenreImage] = useState([]);

  const imagepathRoot = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    getMoviesGenre().then((resp) => {
      setGenre(resp.data.genres);
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {genre &&
            genre.map((g) => {
              const genreImage = getMovieGenreImage.genres.find(
                (img) => img.id === g.id
              );
              return (
                <div className="genreMovieCard" key={g.id}>
                  <Link to={`/genres/${g.id}`}>
                    <img
                      className="genreImage"
                      src={`https://image.tmdb.org/t/p/original/${genreImage.poster_path}`}
                    />
                    <h3 className="genreNames">{g.name}</h3>
                  </Link>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}
