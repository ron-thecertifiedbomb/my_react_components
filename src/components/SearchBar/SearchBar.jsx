import React from "react";
import "./SearchBar.css";

const SearchBar = ({onQuery}) => {

function  handleInput (e) {
  onQuery(e.target.value)
}



  return (
    <div className="search_box_container">
      <input
        type="text"
        onInput={handleInput}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
