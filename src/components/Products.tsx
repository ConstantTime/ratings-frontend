import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../api/responses/types";
import { ApiEndpoints, SERVER_URL } from "../constants/Constants";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>(SERVER_URL + ApiEndpoints.FETCH_PRODUCTS, {
        method: "GET",
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  return (
    <Typography variant="h3" component="h2" align="center">
      {products.map((product) => {
        return <div>{product.name}</div>;
      })}
    </Typography>
  );
};

export default Products;
