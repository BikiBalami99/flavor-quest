import React from "react";
import styles from "./HeroSection.module.css";
import SearchBar from "../SearchBar/SearchBar";

function HeroSection() {
  return (
    <div className={styles.heroBackground}>
      <SearchBar />
    </div>
  );
}

export default HeroSection;
