import React, {FC} from 'react';
import "./style.css"

interface Props {
    stars: number;
}

export const StarRating: FC<Props> = ({ stars }) => {
    const filledStars = Math.min(stars, 10);

    return (
        <div className="star-rating">
            {[...Array(10)].map((_, index) => {
                const filledStar = index < filledStars;

                return (
                    <span className={`star ${filledStar ? 'filled' : ''}`} key={index}>
            &#9733;
          </span>
                );
            })}
        </div>
    );
};

