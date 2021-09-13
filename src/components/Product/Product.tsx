import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct, IRating } from "../../api/responses/types";
import { ApiEndpoints, SERVER_URL } from "../../constants/Constants";
import AddRatingModal from "../AddRating/AddRatingModal";
import GumroadButton from "../Button/GumroadButton";
import Review from "../Review/Review";
import "./product.css";

const Product: React.FC = () => {
  const id = useParams<any>();
  const [product, setProduct] = useState<IProduct>();
  const [ratings, setRatings] = useState<IRating[]>([]);
  const [isModelOpen, showModal] = useState(false);

  const averageRating = () => {
    let avgRating = 0.0;
    ratings?.forEach((rating) => {
      avgRating = avgRating + rating.rating;
    });

    avgRating /= ratings?.length;

    return avgRating;
  };

  useEffect(() => {
    axios
      .get<IProduct>(
        SERVER_URL + ApiEndpoints.FETCH_PRODUCT_DETAILS(id.id as String),
        {
          method: "GET",
        }
      )
      .then((response) => {
        setProduct(response.data);
      })
      .catch((response) => {
        console.log("Error while fetching product details:", response);
      });

    axios
      .get<IRating[]>(
        SERVER_URL + ApiEndpoints.FETCH_TOP3_RATINGS(id.id as String),
        {
          method: "GET",
        }
      )
      .then((response) => {
        setRatings(response.data);
      })
      .catch((response) => {
        console.log("Error while fetching top 3 ratings:", response);
      });
  }, []);

  if (!product) {
    return <div>Error in loading product!!!</div>;
  }

  const handleClick = () => {
    showModal(true);
  };

  const handleClose = () => {
    showModal(false);
  };

  return (
    <div className="product-page">
      <Typography variant="h2" component="h2" align="center">
        <div className="product-heading">{product.name}</div>
      </Typography>
      <div className="add-rating">
        <div className="average-rating">
          <div className="rating-text">
            <Typography variant="h5" align="center">
              {averageRating()}
            </Typography>
          </div>
          <Rating
            name="half-rating"
            value={averageRating()}
            precision={0.5}
            readOnly
          />
        </div>

        <div className="add-rating-button">
          <GumroadButton onClick={handleClick}>Add Review</GumroadButton>
        </div>
      </div>

      <div className="separator"></div>

      <div className="top3-reviews">
        <Typography variant="h5" component="h2">
          Reviews
        </Typography>

        {ratings.map((rating) => (
          <Review rating={rating} />
        ))}
      </div>
      {isModelOpen && (
        <Modal
          open
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <AddRatingModal />
        </Modal>
      )}
    </div>
  );
};

export default Product;
