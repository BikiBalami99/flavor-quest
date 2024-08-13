import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form
      className={styles.searchBar}
      role="search"
      aria-labelledby="search-bar-heading"
    >
      <input
        className={styles.searchRestaurant}
        id="search-restaurants"
        name="search-restaurants"
        type="text"
        placeholder="Enter restaurant name"
        aria-required="true"
      />

      <input
        className={styles.searchLocation}
        id="selected-location"
        name="selected-location"
        type="text"
        placeholder="Enter location"
        aria-required="true"
      />

      <fieldset className={styles.searchCriteria}>
        <legend hidden>Search by criteria</legend>
        <button type="button">Best Match</button>
        <button type="button">Highest Rated</button>
        <button type="button">Most Reviewed</button>
      </fieldset>
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
