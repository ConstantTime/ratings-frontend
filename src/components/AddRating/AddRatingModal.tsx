import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DEFAULT_RATING_VALUE } from "../../constants/Constants";
import GumroadButton from "../Button/GumroadButton";
import "./addRatingModal.css";
import { addRatingAndReview } from "./api";
import { IAddRatingModal } from "./types";

const AddRatingModal: React.FC<IAddRatingModal> = ({ closeModal }) => {
  const id = useParams<any>();
  const [rating, setRating] = useState(DEFAULT_RATING_VALUE);
  const [review, setReview] = useState("");
  const handleClick = () => {
    addRatingAndReview(id, rating, review);
    closeModal();
  };

  const handleChangeInReview = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setReview(e.target.value);
  };

  return (
    <div className="add-rating-modal">
      <Typography variant="h4" component="h2" align="center">
        What's your rating?
      </Typography>

      <Typography variant="h6" component="h2" align="center">
        Rating
      </Typography>

      <Rating
        name="product-rating"
        defaultValue={DEFAULT_RATING_VALUE}
        precision={0.5}
        onChange={(_, newValue) => {
          newValue != null && setRating(newValue);
        }}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />

      <Typography variant="h6" component="h2" align="center">
        Review
      </Typography>

      <TextField
        id="standard-basic"
        label="Start typing"
        onChange={(e) => handleChangeInReview(e)}
      />

      <GumroadButton onClick={handleClick}>Submit Review</GumroadButton>
    </div>
  );
};

export default AddRatingModal;
