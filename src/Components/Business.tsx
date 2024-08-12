import React from "react";
import { RestaurantInterface } from "../Types/Interfaces";
import styles from "./Business.module.css";
import RatingStars from "./RatingStars";

interface BusinessProp {
  aBusiness: RestaurantInterface;
}

const Business = ({ aBusiness }: BusinessProp): JSX.Element => {
  return (
    <li className={styles.eachBusiness}>
      <img
        className={styles.businessImg}
        src={aBusiness.imageSrc}
        alt="Image of the business"
      />{" "}
      <p>{aBusiness.category}</p>
      <article className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{aBusiness.name}</h2>
        <section className={styles.cardInformation}>
          <address className={styles.address}>
            <p>{aBusiness.zipCode}</p>
            <p>{aBusiness.address}</p>
            <p>{aBusiness.city}</p>
            <p>{aBusiness.state}</p>
          </address>
          <section className={styles.review}>
            <RatingStars />
            <p>{aBusiness.rating}</p>
            <p>{aBusiness.reviewCount}</p>
          </section>
        </section>
      </article>
    </li>
  );
};

export default Business;
