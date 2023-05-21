import React, { FC, useCallback } from "react";
import "./style.css";
import { useGenres } from "../../hooks/useGenre";
import { IGenres } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  onClose: () => void;
}
export const Genres: FC<Props> = ({ onClose }) => {
  const genres = useGenres();

  return (
    <div className="wrapper">
      <div className="genres-modal">
        <div className="close-button">
          <button className="close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="links-wrap">
          {genres.map((genre: IGenres) => (
            <Link to={`/genres/${genre.id}`} onClick={onClose} className="link">
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
