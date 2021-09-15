import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../api/responses/types";
import { fetchProducts } from "./api";
import "./products.css";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div>
      <Typography variant="h3" component="h2" align="center">
        <div className="products-list-heading">Gumroad Products</div>
      </Typography>
      <div className="products-list">
        {products.map((product, index) => (
          <Typography
            key={`${index}`}
            variant="h5"
            component="h2"
            align="center"
          >
            <Link to={`/product/${product.productId}`}>{product.name}</Link>
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default Products;
