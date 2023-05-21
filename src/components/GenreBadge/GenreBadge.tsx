import React, {FC} from 'react';
import {IGenres} from "../../types";
import "./style.css";

interface Props {
    genre: IGenres;
}
const GenreBadge: FC<Props> = ({genre}) => {
    return (
        <div className="badge">
           <p>{genre.name}</p>
        </div>
    );
};

export {GenreBadge};