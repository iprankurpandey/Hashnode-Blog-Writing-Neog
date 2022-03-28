import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icon/ai";
function Rating() {
  const Rating = ({ rating, onClick, style }) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <span key={i} onClick={() => onClick(i)} style={style}>
            {rating > i ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        ))}
      </>
    );
  };
}

export default Rating;
