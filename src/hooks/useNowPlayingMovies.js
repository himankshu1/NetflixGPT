import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, nowPlayingMovieUrl } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(nowPlayingMovieUrl, API_OPTIONS);
        const formattedJSONMovie = await data.json();
        // console.log(formattedJSONMovie.results);
        dispatch(addNowPlayingMovies(formattedJSONMovie.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);


}

export default useNowPlayingMovies;