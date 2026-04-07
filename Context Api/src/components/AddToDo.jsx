import { useState, useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // use the useRef hook to store the current value of the todoName and dueDate variables, and update them in the handleNameChange and
  //  functions. This way, we can avoid unnecessary re-renders of the component when the user types in the input fields.
  // we are using this ref in jsx to get current value by the user

  // use the context api to get the todoItems from the context and use it in the component. This way, we can avoid passing the todoItems as props from the parent component to the child component.
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   // setTodoName(event.target.value);
  //   // noOfUpdates.current++;
  // };
  // const handleDateChange = (event) => {
  //   // setDueDate(event.target.value);
  //   // console.log("Date updated " + noOfUpdates.current);
  // };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    if (todoName === "" || dueDate === "") {
      alert("Please enter both name and due date");
      return;
    }
    addNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };
  return (
    <div className="container text-center">
      <form className="row p-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            //  not req value if use the useref
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            // onSubmit={() => handleAddButtonClicked(todoName, dueDate)}
            // type="button"
            className="btn btn-success w-100"
            // onClick={() => handleAddButton(todoName, dueDate)}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
