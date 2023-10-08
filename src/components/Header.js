import React, { useEffect, useState } from "react";

function Header({ setFilteredProducts, products }) {
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };
  
  useEffect(() => {
    const trimmedSearchItem = searchItem.trim();
    let filtered;
    if (trimmedSearchItem) {
      filtered = products.filter((product) => {
        return product.category
          .toLowerCase()
          .startsWith(trimmedSearchItem.toLowerCase());
      });
    } else {
      filtered = products;
    }
    setFilteredProducts(filtered);
  }, [searchItem, products, setFilteredProducts]);

  return (
    <header className="header">
      <h1>Product Details</h1>
      <form onSubmit={handleSubmit}>
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
