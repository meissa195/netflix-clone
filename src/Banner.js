import React, { useEffect, useState } from "react";
import axios from "./axios"
import requests from "./request";
import banner from  "./Banner.css"

export default function Banner() {
    const [movie, setMovie] = useState([]);
    // runs based on a given condition
   
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            // grab a random movie to display in header 
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)]);
            return request
        };
        fetchData()
  }, [])
    // makes description display ... if more than 150 char
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        > 
            <div className="banner__contents">
                <h1 className="banner__title">
                    {/* optional chaining */}
                    {movie?.title || movie?.movie || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className="banner--fadeBottom">
                    
                </div>
            </div>
            {/* header to have background img */}
            {/* title */}
            {/* div --> 2 button (play & my list) */}
            {/* description */}
        </header>
    )
}
