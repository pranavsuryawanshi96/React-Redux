import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  return (
    <li className={`list-group-item ${styles["p-item"]}`}>
      <span className={styles["p-span"]}>{foodItem}</span>
    </li>
  );
};
export default Item;
