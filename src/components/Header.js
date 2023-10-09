import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ setFilteredProducts, products }) {
  const [searchItem, setSearchItem] = useState("");

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          value={searchItem}
          className="input"
          type="text"
          placeholder="Search categories..."
        />
      </form>
      <nav className="nav">
        <ul className="links">
          <li><Link to='/fullpage'>Categories</Link> </li>
          <li><Link to='/'>Availabe</Link> </li>
          <li><Link to='/'>All</Link> </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
