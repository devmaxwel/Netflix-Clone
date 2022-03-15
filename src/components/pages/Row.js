import React, { useEffect, useState } from "react";
import { instance } from "../Data/axios";
import './row.css';

const Row = ({ title, fetchURL,isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  //  A snippet of code that runs on a certain condition
    const base_url = "https://image.tmdb.org/t/p/original/";
    
  useEffect(() => {
    let mounted = true;
       const fetchData =async()=>{
            const data = await instance.get(fetchURL)
            if(mounted){
                setMovies(data.data.results)
            }
            return data;
       }
       fetchData();
    return () => {
      mounted = false;
    };
  }, [fetchURL]);
  console.log(movies)

    
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && 'row_posterlarge'}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
