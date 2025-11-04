import { useState } from "react";
import {
    RatingContainer,
    RatingHeader,
    StarContainer,
    StarIcon
} from "./rating-styles.js";


const Rating = ({ count = 5, defaultRating = 0, setRating }) => {
    const [ratingValue, setRatingValue] = useState(defaultRating);
    const [hoverValue, setHoverValue] = useState(null);
    const stars = [...Array(count)];

    const handleRating = (rating) => {
        setRatingValue(rating);
        setRating(rating)
    };

    const handleMouseEnter = (rating) => {
        setHoverValue(rating);
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
    };
    const displayValue = hoverValue || ratingValue;

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
                                onClick={() => handleRating(value)}
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