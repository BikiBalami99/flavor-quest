import React from "react";

function SearchBar() {
  return (
    <form>
      <button>Best Match</button>
      <button>Highest rated</button>
      <button>Most Reviewed</button>
      <label htmlFor="search-restaurants"></label>
      <input id="search-restaurants" name="search-restaurants" type="text" />
      <label htmlFor="selected-location"></label>
      <input id="selected-location" name="selected-location" type="text" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
