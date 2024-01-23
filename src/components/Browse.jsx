import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeaderLoggedIn from "./HeaderLoggedIn";
import MovieCategoryContainer from "./MovieCategoryContainer";
import MovieTrailerContainer from "./MovieTrailerContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <HeaderLoggedIn />
      {/* Main container - Movie trailer Background --> Movie title - Movie description - Play, More info button */}
      <MovieTrailerContainer />

      {/* Secondary container - Movies category title - movie list --> Movie cards */}
      <MovieCategoryContainer />
    </div>
  );
};

export default Browse;
