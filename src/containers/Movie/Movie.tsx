import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { options } from "../../constants/api";
import { PosterPreview } from "../../components/PosterPreview";
import { IGenres, IMovie } from "../../types";
import { MovieInfo } from "../../components/MovieInfo";
import { StarRating } from "../../components/StarsRating/StarRating";
import { GenreBadge } from "../../components/GenreBadge/GenreBadge";
import { useGenres } from "../../hooks/useGenre";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie | any>();
  const genres = useGenres();

  const currentGenres = useMemo(() => {
    return genres.filter((genre: IGenres) =>
      movie?.genre_ids?.includes(genre.id)
    );
  }, [genres, movie]);

  useEffect(() => {
    fetch(
      `
      https://api.themoviedb.org/3/movie/${id}`,
      options
    )
      .then((res) => res.json())
      .then((response) => {
        setMovie(response);
      });
  }, []);

  console.log(movie, "adfjjajdfhajdfhj");
  return (
    <>
      {movie ? (
        <div className="movie-list-card">
          <div className="poster-container">
            <PosterPreview image={movie.poster_path} />
          </div>

          <div className="movie-details">
            <MovieInfo movie={movie} />
            <StarRating stars={movie.vote_average} />
            <div className="genres-container">
              {currentGenres.map((genre: IGenres) => (
                <GenreBadge key={genre.id} genre={genre} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
