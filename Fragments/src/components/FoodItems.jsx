import Item from "./Item";
const FoodItems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((item) => (
        //  we have to give  here key
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
