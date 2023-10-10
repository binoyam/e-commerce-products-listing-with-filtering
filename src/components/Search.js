import React from "react";

function Search({ searchItem , setSearchItem}) {
  return (
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
  );
}

export default Search;
