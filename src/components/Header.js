import React, { useEffect, useState } from "react";

import Nav from "./Nav";
import Search from "./Search";

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
      <h1>Fk Store</h1>
      <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      <Nav />
    </header>
  );
}

export default Header;
