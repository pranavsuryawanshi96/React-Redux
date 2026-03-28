const ErrorMessage = ({ item }) => {
  // not required to write here again array we are calling form app.jsx
  // let foodItems = ["Apple", "Green Vegetable", "Milk", "Sprouts"];
  return <>{item.length === 0 && <h3>I am still hungry.</h3>}</>;
};
export default ErrorMessage;
