import React from "react";
import styles from "./RatingStars.module.css";

interface RatingStarsProps {
  rating: number;
}

function RatingStars(props: RatingStarsProps) {
  const { rating } = props;

  function amIGolden(positionOfStar: number) {
    if (positionOfStar <= rating) {
      return `${styles.star} ${styles.goldenStar}`;
    } else if (positionOfStar - 0.5 <= rating) {
      return `${styles.star} ${styles.halfGoldenStar}`;
    } else {
      return `${styles.star} ${styles.darkStar}`;
    }
  }

  return (
    <section className={styles.allStars}>
      <div className={amIGolden(1)}></div>
      <div className={amIGolden(2)}></div>
      <div className={amIGolden(3)}></div>
      <div className={amIGolden(4)}></div>
      <div className={amIGolden(5)}></div>
    </section>
  );
}

export default RatingStars;
