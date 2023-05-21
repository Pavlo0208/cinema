import React, { FC, useMemo, useCallback } from "react";
import { IGenres, IMovie } from "../../types";
import "./style.css";

import { PosterPreview } from "../PosterPreview";
import { MovieInfo } from "../MovieInfo";
import { GenreBadge } from "../GenreBadge/GenreBadge";
import { StarRating } from "../StarsRating/StarRating";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
  genres: IGenres[];
}
const MovieListCard: FC<Props> = ({ movie, genres }) => {
  const navigate = useNavigate();

  const currentGenres = useMemo(() => {
    return genres.filter((genre: IGenres) =>
      movie.genre_ids.includes(genre.id)
    );
  }, [genres, movie]);

  const gotToDetails = useCallback(() => {
    navigate(`/movies/${movie.id}`);
  }, [movie.id]);
  return (
    <div className="movie-list-card" onClick={gotToDetails}>
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
  );
};

export { MovieListCard };
