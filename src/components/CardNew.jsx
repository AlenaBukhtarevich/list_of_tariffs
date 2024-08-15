import React from "react";
import styles from "./CardNew.module.css";

function CardNew({
  name,
  price,
  speed,
  className,
  headerClass,
  priceClass,
  onClick,
  isSelected,
}) {
  return (
    <div
      className={`${styles.card} ${className} ${
        isSelected ? styles.selectedCard : ""
      }`}
      onClick={onClick}
    >
      <div className={headerClass}>
        <h4 className={styles.cardName}>Безлимитный {name}</h4>
      </div>
      <div className={priceClass}>
        <p className={styles.cardPrice}>руб {price} /мес</p>
      </div>
      <p className={styles.cardText}>до {speed} Мбит/сек</p>
      <div className={styles.footerClass}>
        <p className={styles.cardFooter}>
          Объем включенного трафика не ограничен
        </p>
      </div>
    </div>
  );
}

export default CardNew;
