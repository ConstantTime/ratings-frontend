import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct, IRating } from "../../api/responses/types";
import AddRatingModal from "../AddRating/AddRatingModal";
import GumroadButton from "../Button/GumroadButton";
import Review from "../Review/Review";
import { fetchProductDetails, fetchTop3Ratings } from "./api";
import "./product.css";
import { averageRating } from "./utils";

const Product: React.FC = () => {
  const id = useParams<any>();
  const [product, setProduct] = useState<IProduct>();
  const [ratings, setRatings] = useState<IRating[]>([]);
  const [isModelOpen, showModal] = useState(false);

  const handleClick = () => {
    showModal(true);
  };

  const handleClose = () => {
    showModal(false);
  };

  useEffect(() => {
    fetchProductDetails(id, setProduct);
    fetchTop3Ratings(id, setRatings);
  }, []);

  if (!product) {
    return <div>Error in loading product!!!</div>;
  }

  return (
    <div className="product-page">
      <Typography variant="h2" component="h2" align="center">
        <div className="product-heading">{product.name}</div>
      </Typography>
      <div className="add-rating">
        {ratings.length > 0 ? (
          <div className="average-rating">
            <div className="rating-text">
              <Typography variant="h5" align="center">
                {averageRating(ratings)}
              </Typography>
            </div>
            <Rating
              name="rating-stars"
              value={averageRating(ratings)}
              precision={0.5}
              readOnly
            />
          </div>
        ) : (
          <div>Not rated yet 😔</div>
        )}

        <div className="add-rating-button">
          <GumroadButton onClick={handleClick}>Add Review</GumroadButton>
        </div>
      </div>

      <div className="separator"></div>

      <div className="top3-reviews">
        <Typography variant="h5" component="h2">
          Reviews
        </Typography>

        {ratings.map((rating, index) => (
          <Review key={`${index}`} rating={rating} />
        ))}
      </div>
      {isModelOpen && (
        <Modal
          open
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <AddRatingModal closeModal={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default Product;
