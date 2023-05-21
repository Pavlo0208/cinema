import React, {FC} from 'react';
import {MovieListCard} from "../MovieListCard";
import {IGenres, IMovie} from "../../types";
import {useGenres} from "../../hooks/useGenre";

interface Props{
    movies: IMovie[]
}
const MovieList:FC<Props> = ({movies}) => {
    const genres = useGenres();

    return (
        <div>
            <div>
                {movies.map((movie: IMovie) => (
                    <MovieListCard movie={movie} key={movie.id} genres={genres}/>
                ))}
            </div>
        </div>
    );
};

export {MovieList};