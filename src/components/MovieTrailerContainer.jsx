import React from "react";
import { useSelector } from "react-redux";
import MovieTrailer from "./MovieTrailer";
import MovieTitleDescription from "./MovieTitleDescription";

const MovieTrailerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const main_movie = movies[0];
  // console.log(main_movie);
  const { id, original_title, overview } = main_movie;

  return (
    <div>
      {/* Movie title and description  */}
      <MovieTitleDescription title={original_title} description={overview} />

      {/* Movie trailer player background  */}
      <MovieTrailer movieId={id} />
    </div>
  );
};

export default MovieTrailerContainer;
