import React from "react";
import BusinessList from "./Components/BusinessList/BusinessList";
import SearchBar from "./Components/SearchBar/SearchBar";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <BusinessList />
    </div>
  );
}

export default App;
