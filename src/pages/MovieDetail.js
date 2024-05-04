import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import backupImg from "../assets/images/backup.png";
import useUpdateTitle from "../hooks/useUpdateTitle";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const image = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : backupImg;

  useEffect(() => {
    const getMovieData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=fa348b8d2d56671aeea4afb1e17cbd16`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    };

    getMovieData();
  }, []);
  useUpdateTitle(movie?.title);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt={movie.title} />
        </div>

        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4">{movie.overview}</p>
          <p className="flex flex-wrap gap-2 my-7">
            {movie?.genres?.map((item) => (
              <span
                key={item.id}
                className="p-2 mr-2 border border-gray-200 rounded dark:border-gray-600"
              >
                {item.name}
              </span>
            ))}
          </p>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className=" text-gray-900 dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>

          <p className="font-bold my-4">
            Runtime: <span className="font-normal">{movie.runtime} min.</span>
          </p>

          <p className="font-bold  my-4">
            Budget: <span className="font-normal">{movie.budget}</span>
          </p>

          <p className="font-bold  my-4">
            Revenue: <span className="font-normal">{movie.revenue}</span>
          </p>

          <p className="font-bold  my-4">
            Release Date:{" "}
            <span className="font-normal">{movie.release_date}</span>
          </p>

          <p className="font-bold  my-4">
            IMDB Code:{" "}
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
              className="font-normal"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default MovieDetail;
