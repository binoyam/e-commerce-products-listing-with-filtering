import React from "react";
import { Link } from "react-router-dom";

function ProductList({ filteredProducts }) {
  return (
    <>
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          className="product"
          to={`/products/${product.id}`}
        >
          <article>
            <p>
              <span className="product-name">{product.product_name}</span>{" "}
            </p>
            <img className="product-img" src={product.brand} alt="product" />
            <p>
              Category: <span className="category">{product.category}</span>{" "}
            </p>
            <p className="description">
              Description:{" "}
              <span className="description">{product.description}</span>{" "}
            </p>
            <p>
              Available:{" "}
              {!product.is_available ? (
                <span className="available">Available</span>
              ) : (
                <span className="not-available">Not Available</span>
              )}
            </p>
          </article>
        </Link>
      ))}
    </>
  );
}

export default ProductList;
