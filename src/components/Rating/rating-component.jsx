import { useState } from "react";
import {
    RatingContainer,
    RatingHeader,
    StarContainer,
    StarIcon
} from "./rating-styles.js";

const Rating = ({ count = 5, handleRatingChange, currentRating }) => {

    const [hoverValue, setHoverValue] = useState(null);
    const stars = [...Array(count)];

    const handleClick = (rating) => {
        handleRatingChange(String(rating));
    };

    const handleMouseEnter = (rating) => {
        setHoverValue(rating);
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
    };


    const ratingAsNumber = Number(currentRating);
    const displayValue = hoverValue || ratingAsNumber;

    return (
        <RatingContainer>
            <RatingHeader>Rating</RatingHeader>
            <StarContainer>
                {
                    stars.map((_, index) => {
                        const value = index + 1;
                        return (
                            <StarIcon
                                key={index}
                                className={value <= displayValue ? "active" : ""}
                                onClick={() => handleClick(value)}
                                onMouseEnter={() => handleMouseEnter(value)}
                                onMouseLeave={handleMouseLeave}
                            />
                        );
                    })
                }
            </StarContainer>
        </RatingContainer>
    );
};

export default Rating;