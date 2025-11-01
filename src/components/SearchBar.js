import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap" role="search">
      <FaSearch className="search-icon" />
      <input
        className="search-input"
        placeholder="Search courses or teacher..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
