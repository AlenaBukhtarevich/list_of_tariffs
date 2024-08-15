import React, { useState } from "react";
import CardNew from "./CardNew";
import styles from "./CardList.module.css";

const tariffs = [
  {
    name: "300",
    price: 300,
    speed: "10",
    headerClass: styles.blueCardHeader,
    priceClass: styles.blueCardPrice,
  },
  {
    name: "450",
    price: 450,
    speed: "50",
    headerClass: styles.greenCardHeader,
    priceClass: styles.greenCardPrice,
  },
  {
    name: "500",
    price: 550,
    speed: "100",
    headerClass: styles.redCardHeader,
    priceClass: styles.redCardPrice,
  },
  {
    name: "1000",
    price: 1000,
    speed: "200",
    headerClass: styles.greyCardHeader,
    priceClass: styles.greyCardPrice,
  },
];

function CardList() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleSelectTariff = (tariffName) => {
    setSelectedTariff(tariffName);
  };

  return (
    <div className={styles.cardContainer}>
      {tariffs.map((tariff) => (
        <CardNew
          key={tariff.name}
          {...tariff}
          onClick={() => handleSelectTariff(tariff.name)}
          isSelected={selectedTariff === tariff.name}
        />
      ))}
    </div>
  );
}

export default CardList;
