import React, { useEffect, useState } from "react";
import { instance } from "../Data/axios";
import { requests } from "../Data/request";
import './banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    let unsubscribe = true;
    const fetchBanner = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      if (unsubscribe) {
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length-1)
          ]
        );
      }
      return request;
    };
    fetchBanner();
    return () => {
      unsubscribe = false;
    };
  }, []);

  console.log("movie", movie);
    const base_url = "https://image.tmdb.org/t/p/original";
    const backgroundImage = `${base_url}${movie?.backdrop_path}`
  return (
    <header
      className="bannerh"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "top",
      }}
    >
      <div className="bannerh_contents">
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="bannerh_buttons">
          <button className="bannerh_button">Play</button>
          <button className="bannerh_button">My Playlist</button>
        </div>
        <h2 className="bannerh_description">
            {movie?.overview}
        </h2>
      </div>
      <div className="banner_fadedBottom"n />
    </header>
  );
};

export default Banner;
