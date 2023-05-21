import React, {FC} from 'react';

interface Props {
    image: string;
}
const PosterPreview:FC<Props> = ({image}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${image}`}/>
        </div>
    );
};

export {PosterPreview};