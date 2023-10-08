import React, { useState } from "react";

function Header({ setFilteredProducts, products }) {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
    filterProducts();
  };
  const filterProducts = () => {
    const trimmedSearchItem = searchItem.trim();
    let filtered;
    if (trimmedSearchItem) {
      filtered = products.filter((product) => {
        return product.category
          .toLowerCase()
          .includes(trimmedSearchItem.toLowerCase());
      });
    } else {
      filtered = products;
    }
    setFilteredProducts(filtered);
  };

  return (
    <header className="header">
      <h1>Product Details</h1>
      <form onSubmit={handleInputChange}>
        <input
          onChange={handleInputChange}
          value={searchItem}
          className="input"
          type="text"
          placeholder="Search categories..."
        />
      </form>
      <nav className="nav">
        <ul className="links">
          <li>Categories</li>
          <li>Sort by</li>
          <li>ALL</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
