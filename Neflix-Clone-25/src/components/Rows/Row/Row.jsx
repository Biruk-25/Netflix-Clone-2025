

import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../../Utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    (async () => {
      try {
        // console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        // console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        // console.log('error', error);
      }
    })();
  }, [fetchUrl]);
 
  const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl('');
  } else {
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log('Trailer not found', error));
  }
};

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
        <h1 className="row_title">{title}</h1>
        <div className="row_posters">
            {movies.map((movie, index) => (
                <img
                    key={index}
                    onClick={() => handleClick(movie)}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                />
            ))}
        </div>
        {/* YOUTUBE VIDEO */}
        {trailerUrl && (
  <div className="trailer-container">
    <button className="close-button" onClick={() => setTrailerUrl('')}>
      ❌ Close
    </button>
    <YouTube videoId={trailerUrl} opts={opts} />
  </div>
)}

    </div>
);
};
export default Row;
