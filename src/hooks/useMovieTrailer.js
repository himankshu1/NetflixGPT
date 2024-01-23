import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
// import 

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // API to fetch a single movie trailer and updating the store
    const getMovies = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
        );
        const formattedMovieData = await data.json();
        const movieTrailerList = formattedMovieData.results.filter(
            (movie) => movie.type === "Trailer"
        );
        const trailer = movieTrailerList[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovies();
    }, []);
    //   console.log(movieId);}
}
export default useMovieTrailer;