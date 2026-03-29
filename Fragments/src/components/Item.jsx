import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleBuyButtonClick = () => {
    console.log(`${foodItem} being bought`);
  };
  // let { foodItem } = props;
  return (
    <li className={`list-group-item ${styles["p-item"]}`}>
      <span className={styles["p-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => handleBuyButtonClick()}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
