import React, {FC} from 'react';
import {IMovie} from "../../types";
import "./style.css"
interface Props {
    movie: IMovie;
}

export const MovieInfo :FC<Props> = ({movie}) => {
    return (
        <div className="text">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

        </div>
    );
};
