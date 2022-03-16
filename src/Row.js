import React, {useState, useEffect} from "react";
import axios from './axios'
import CSS from "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

// base url for images
const base_url = "https://image.tmdb.org/t/p/original/"

export default function Row({title, fetchUrl, isLargeRow}) { 
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // run once and do not run it again
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    // options for the video
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    // fucntion when user clicks 
    const handleClick = (movie) => {
        // if trailer already showing, close it when clicked again
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            // gets movie name, looks for a trailer on YT, then searches for the URL for the ID
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlID = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlID.get("v"))
        }).catch((error) => console.log(error));
        }
};

    return (
        <div className="row">
            {/* title */}
            <h2 className="row__title">{title}</h2>
            {/* container -> posters */}
            <div className="row-posters">
            {/* several row posters */}
                {movies.map((movie) => (
                <img
                // give each movie an id for optimization for loading
                key={movie.id}  
                onClick={() => handleClick(movie)}        
                //two classes, one for general and one for large poster - does large get some properties as row poster in CSS?    
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div> 
            {/* when we have trailer url, show youtube video embedded in row */}
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>

    )
}

// check out 'rfce' - ES7 shortcuts