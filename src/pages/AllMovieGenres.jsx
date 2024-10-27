import axios from "axios";
import { useEffect, useState } from "react";
import moviesAPI from "../services/moviesAPI";
import { Link } from "react-router-dom";
import { Carousel } from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";

{
  /* 
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
*/
}

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

  return (
    <>
      {/* 
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true} // Adjust based on your needs
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    */}

      <div>
        {genre &&
          genre.map((g) => {
            const genreImage = getMovieGenreImage.genres.find(
              (img) => img.id === g.id
            );
            return (
              <div className="genreMovieCard" key={g.id}>
                <ul>
                  <li>
                    <Link to={`/genres/${g.id}`}>
                      <img
                        className="genreImage"
                        src={`https://image.tmdb.org/t/p/original/${genreImage.poster_path}`}
                      />
                      <p>{g.name}</p>
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
      {/* 
    </Carousel>
    */}
    </>
  );
}
