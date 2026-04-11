import { createContext, useReducer } from "react";
export const TodoItemsContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
  if (action.type === "NEW_ITEM") {
    return [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    return currTodoItems.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }
  return currTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);
  // use the useReducer
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    /*const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);*/
  };
  const deleteItem = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(newItemAction);
    // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
