import { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "toggle":
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
}

function App() {
  // const [count, setCount] = useState(0);
  // const [hidden, setHidden] = useState(false);

  const [state, dispatch] = useReducer(reducer, { count: 0, hidden: false });

  return (
    <>
      <div className="APP">
        <h1>Cont {state.count}</h1>
        <button
          onClick={() => {
            //  we have to use object to dispatch the action
            dispatch({ type: "increment" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "toggle" });
          }}
        >
          Hide
        </button>
        {state.hidden ? <h1>Hidden</h1> : <h1>Not Hidden</h1>}
      </div>
    </>
  );
}

export default App;
