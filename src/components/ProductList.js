import React from "react";
import Product from "./Product";

function ProductList({ products, searchKey }) {
  //   console.log(products);

  const filteredProducts = products.filter((product) => {
    if (searchKey === "") {
      return true;
    } else {
      const keys = products.keys(product);
      return keys.some((key) => {
        if(typeof product[key] === 'string'){
        return product[key].toString().toLowercase().includes(searchKey.toLowercase());
        }
        return false
      });
    }
  });
  return (
    <>
      {filteredProducts.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
}

export default ProductList;
