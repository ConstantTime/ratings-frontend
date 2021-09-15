import Rating from "@material-ui/lab/Rating";
import React from "react";
import "./review.css";
import { IReview } from "./types";

const Review: React.FC<IReview> = ({ rating }) => {
  return (
    <div className="review">
      <Rating
        name="half-rating"
        value={rating.rating}
        precision={0.5}
        readOnly
      />
      <div className="rating">{rating.rating}</div>
      <div className="review-text">{rating.review}</div>
    </div>
  );
};

export default Review;
