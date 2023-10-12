import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products }) => {
  const { id } = useParams();

  const foundproducts = products.find((obj) => obj.id.toString() === id);
  console.log(foundproducts);
  return (
    <>
      <div className="product-info">
        <h1>{foundproducts.product_name}</h1>
      </div>
    </>
  );
};

export default Product;
