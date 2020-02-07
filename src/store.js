import { createStore, combineReducers } from "redux";
import currentMessage from "./reducers/currentMessage";

let redusers = combineReducers({ currentMessage });

let Store = createStore(redusers);
window.store = Store;
console.log(Store.getState());
export default Store;
