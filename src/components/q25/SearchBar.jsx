import React, { useState } from "react";

const SearchBar = ({ items }) => {
  console.log(items);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) => {
    // Ensure item is a string before calling toLowerCase()
    if (typeof item.name === "string") {
      return (
        typeof item.name === "string" &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return false;
  });

  return (
    <div>
      <label htmlFor="search">Search...</label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
