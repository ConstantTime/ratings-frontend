import axios from "axios";
import { IProduct } from "../../api/responses/types";
import { ApiEndpoints, SERVER_URL } from "../../constants/Constants";
import "./product.css";

export const fetchAndSetProductDetails = (
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
