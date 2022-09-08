import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetail = () => {
  const [moviesDetail, setMoviesDetail] = useState([]);
  const fetchMovieDetail = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=79d95fd0b550445ea35c008c2d8c894b&language=en-US`);

    setMoviesDetail(data.results);
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  //api.themoviedb.org/3/movie/{movie_id}?api_key=79d95fd0b550445ea35c008c2d8c894b&language=en-US
  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        {moviesDetail.map((result, index) => {
          return (
            <div key={index}>
              <img src={`${process.env.REACT_APP_IMG_URL}/${result.backdrop_path}`} />
              <h2>{result.title}</h2>
              <h2>{result.overview}</h2>
              <h2>{result.release_date}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetail;
