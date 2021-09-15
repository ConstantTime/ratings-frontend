import axios from "axios";
import { IProduct, IRating } from "../../api/responses/types";
import { ApiEndpoints, SERVER_URL } from "../../constants/Constants";
import "./product.css";

export const fetchProductDetails = (
  id: any,
  setProduct: (data: IProduct | undefined) => void
) => {
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
};

export const fetchTop3Ratings = (
  id: any,
  setRatings: (data: IRating[]) => void
) => {
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
};
