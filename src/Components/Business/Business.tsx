import React from "react";
import { RestaurantInterface } from "../../Types/Interfaces";
import styles from "./Business.module.css";
import RatingStars from "../RatingStars/RatingStars";

interface BusinessProp {
  aBusiness: RestaurantInterface;
}

const Business = ({ aBusiness }: BusinessProp): JSX.Element => {
  return (
    <li className={styles.eachBusiness}>
      <img
        className={styles.businessImg}
        src={aBusiness.imageSrc}
        alt="Current Business"
      />
      <p className={styles.category}>{aBusiness.category}</p>
      <article className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{aBusiness.name}</h2>
        <section className={styles.cardInformation}>
          <section className={styles.review}>
            <RatingStars rating={aBusiness.rating} />
            <p>{"(" + aBusiness.reviewCount + " reviews)"}</p>
          </section>
          <address className={styles.address}>
            <p>{aBusiness.address}</p>
            <p>{aBusiness.city + ", " + aBusiness.state} </p>
            <p>{"Zipcode:" + aBusiness.zipCode}</p>
          </address>
        </section>
      </article>
    </li>
  );
};

export default Business;
