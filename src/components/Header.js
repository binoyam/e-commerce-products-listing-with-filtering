import React, { useState } from "react";

function Header({ onSearch }) {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault()
    setSearchItem(e.target.value);
    onSearch(e.target.value)
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
          placeholder="Search..."
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
