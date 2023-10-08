import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  //   console.log(products);

  function countSameValues(products, key) {
    const valueCount = {};
    products.forEach((obj) => {
      const value = obj[key];

      if (valueCount[value]) {
        valueCount[value]++;
      } else {
        valueCount[value] = 1;
      }
    });
    return valueCount;
  }
  const valueCount = countSameValues(products, "is_available");
  const valueCount1 = countSameValues(products, "category");
  const valueCount2 = countSameValues(products, "color");

  console.log(valueCount);
  console.log(valueCount1);
  console.log(valueCount2);
  return (
    <>
      {products.map((product, id) => (
        <Product key={id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
