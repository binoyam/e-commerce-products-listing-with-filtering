import React from "react";
import Product from "./Product";

function ProductList({ data }) {
    // console.log(data);
  return (
    <>
      {data.map((product, id) => (
        <Product key={id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
