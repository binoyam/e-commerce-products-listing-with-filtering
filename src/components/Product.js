import React from "react";
import { useParams } from "react-router-dom";

function Product({ products }) {
 

  console.log(products);
  const { id } = useParams();
  const currntProduct  = products.find((product) => product.id === id)
 console.log(currntProduct)
  return (
    <>
      <div className="product-info">
        <h1>sdfsdf</h1>
      </div>
    </>
  );
}

export default Product;
