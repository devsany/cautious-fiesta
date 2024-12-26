import React, { useState } from "react";

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      setResults(
        items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {results.length > 0 && (
        <ul className="results-list">
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
