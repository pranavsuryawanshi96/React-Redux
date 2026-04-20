import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
//  second  create the reducer
const counterReducer = (store = INITIAL_VALUE, action) => {
  // ...store is the current value is that store first
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "SUBTRACT") {
    return {
      ...store,
      counter: store.counter - Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};
//  first  create the store then pass the reducer to it
const counterStore = createStore(counterReducer);
export default counterStore;
