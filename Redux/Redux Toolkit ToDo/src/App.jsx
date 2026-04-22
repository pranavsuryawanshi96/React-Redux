import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo></AddTodo>
      <Todo></Todo>
    </>
  );
}

export default App;
