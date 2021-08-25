import React from "react";

import "./SearchBox.css";

export default function SearchBox({ placeHolder, handleChange }) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
}
