import React from "react";
import Business from "../Business/Business";
import { RestaurantInterface } from "../../Types/Interfaces";
import styles from "./BusinessList.module.css";

const businessList: RestaurantInterface[] = [
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
];

function BusinessList() {
  return (
    <ul className={styles.businessList}>
      {businessList.map((currentBusiness: RestaurantInterface, index) => (
        <Business key={index} aBusiness={currentBusiness} />
      ))}
    </ul>
  );
}

export default BusinessList;
