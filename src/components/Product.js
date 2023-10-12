import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products, props }) => {
  const { id } = useParams();

  const foundproducts = products.find(obj => obj.id.toString() === id)
  console.log(props)
  return (
    <>
      <div className="product-info">
        <h1></h1>
      </div>
    </>
  );
}

export default Product;
