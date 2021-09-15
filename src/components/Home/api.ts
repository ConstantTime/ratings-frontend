import axios from "axios";
import { IProduct } from "../../api/responses/types";
import { ApiEndpoints, SERVER_URL } from "../../constants/Constants";

export const fetchProducts = (setProducts: (data: IProduct[]) => void) => {
  axios
    .get<IProduct[]>(SERVER_URL + ApiEndpoints.FETCH_PRODUCTS, {
      method: "GET",
    })
    .then((response) => {
      setProducts(response.data);
    })
    .catch((response) => {
      console.log("Error:", response);
    });
};
