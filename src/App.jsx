import "./App.css";
import CardNew from "./components_new/CardNew";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.cardContainer}>
        <CardNew
          name="300"
          price={300}
          speed="10"
          headerClass={styles.blueCardHeader}
          priceClass={styles.blueCardPrice}
        />
        <CardNew
          name="450"
          price={450}
          speed="50"
          headerClass={styles.greenCardHeader}
          priceClass={styles.greenCardPrice}
        />
        <CardNew
          name="500"
          price={550}
          speed="100"
          className={styles.largeCard}
          headerClass={styles.redCardHeader}
          priceClass={styles.redCardPrice}
        />
        <CardNew
          name="1000"
          price={1000}
          speed="200"
          headerClass={styles.greyCardHeader}
          priceClass={styles.greyCardPrice}
        />
      </div>
    </>
  );
}

export default App;
