import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Apple", "Green Vegetable", "Milk", "Sprouts"];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // another method to write above code is
  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState(["salad", "fruits", "Guava"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const enterItem = event.target.value;
      if (enterItem === "") {
        alert("Please enter a food item");
        return;
      }
      let newFoodItem = event.target.value;
      // after writing text on input should be cleared
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

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
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage item={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <FoodItems item={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default App;
