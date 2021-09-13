import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ApiEndpoints, SERVER_URL } from "../../constants/Constants";
import GumroadButton from "../Button/GumroadButton";
import "./addRatingModal.css";

const DEFAULT_VALUE = 3;
const AddRatingModal: React.FC = () => {
  const id = useParams<any>();
  const [rating, setRating] = useState(DEFAULT_VALUE);
  const [review, setReview] = useState("");
  const handleClick = () => {
    console.log(rating, review);
    axios
      .request({
        url: SERVER_URL + ApiEndpoints.ADD_RATING_AND_REVIEW(id.id as String),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          rating: rating,
          review: review,
        }),
      })
      .catch((response) => {
        console.log("Error while adding rating:", response);
      });
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
        defaultValue={DEFAULT_VALUE}
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
