import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-wrapper">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        placeholder="search for ghost:"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
