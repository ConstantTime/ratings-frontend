import axios from "axios";
import { ApiEndpoints, SERVER_URL } from "../../constants/Constants";

export const addRatingAndReview = (id: any, rating: number, review: String) => {
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
