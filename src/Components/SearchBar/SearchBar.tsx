import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form
      className={styles.searchBar}
      role="search"
      aria-labelledby="search-bar-heading"
    >
      <h2>Discover your cravings!</h2>
      <div className={styles.searchFields}>
        <input
          className={styles.searchRestaurant}
          id="search-restaurants"
          name="search-restaurants"
          type="text"
          placeholder="Restaurant name"
          aria-required="true"
        />

        <input
          className={styles.searchLocation}
          id="selected-location"
          name="selected-location"
          type="text"
          placeholder="Location"
          aria-required="true"
        />
      </div>

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
