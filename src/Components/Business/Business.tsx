import React from "react";
import { RestaurantInterface } from "../../Types/Interfaces";
import styles from "./Business.module.css";
import RatingStars from "../RatingStars/RatingStars";

interface BusinessProp {
  aBusiness: RestaurantInterface;
  businessWebsite: string;
}

const Business = ({
  aBusiness,
  businessWebsite,
}: BusinessProp): JSX.Element => {
  return (
    <li className={styles.eachBusiness}>
      {/* Link to the website */}
      <a className={styles.link} href={businessWebsite}>
        {/* Background Image */}
        <img
          className={styles.businessImg}
          src={aBusiness.imageSrc}
          alt="Current Business"
        />
        {/* Category of the food*/}
        <p className={styles.category}>{aBusiness.category}</p>

        {/* Main content */}
        <article className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{aBusiness.name}</h2>

          <section className={styles.cardInformation}>
            <section className={styles.review}>
              <RatingStars rating={aBusiness.rating} />
              <p>{"(" + aBusiness.reviewCount + " reviews)"}</p>
            </section>

            <address className={styles.address}>
              <p>{aBusiness.address}</p>
              <p>{aBusiness.city + ", " + aBusiness.state}</p>
              <p>{"Zipcode:" + aBusiness.zipCode}</p>
            </address>
          </section>
        </article>
      </a>
    </li>
  );
};

export default Business;
