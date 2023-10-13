import React from "react";
import { Link } from "react-router-dom";

function ProductList({ filteredProducts }) {
  return (
    <>
      {filteredProducts.map((product) => (
        <Link className="link" key={product.id} to={`/products/${product.id}`}>
          <article className="product">
            <h1 className="product-name">{product.product_name}</h1>

            <div className="product-image-div">
              <img src={product.brand} alt="product" />
            </div>

            <div className="product-info-div">
              <span className="pre-text"> Category:</span>
              <p className="category">{product.category}</p>
            </div>

            <div className="product-info-div">
              <span className="pre-text">Description:</span>
              <span className="description">{product.description}</span>
            </div>

            <div className="product-info-div">
              <span className="pre-text">Available:</span>
              {!product.is_available ? (
                <span className="available">Available</span>
              ) : (
                <span className="not-available">Not Available</span>
              )}
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}

export default ProductList;
