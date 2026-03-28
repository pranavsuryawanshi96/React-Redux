import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItems = ["Apple", "Green Vegetable", "Milk", "Sprouts"];
  // one method conditional
  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>;
  // }
  return (
    // <React.Fragment>
    // another method mostly used
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage item={foodItems}></ErrorMessage>
      <FoodItems item={foodItems}></FoodItems>
    </>
  );
}
export default App;
