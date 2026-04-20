import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  /*useSelector is a hook provided by the react-redux library that allows you to access the Redux store's state in a functional component. It takes a selector function as an argument, which is used to select a specific part of the state from the Redux store. The useSelector hook will automatically subscribe to the Redux store and re-render the component whenever the selected state changes. This makes it easy to access and display data from the Redux store in your React components.*/
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter current value:{counter}</p>;
}

export default DisplayCounter;
