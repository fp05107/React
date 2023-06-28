import { decreament, increament } from "./action.js";
import { INC } from "./actionTypes.js";
import { store } from "./store.js";


store.dispatch(increament(6))
store.dispatch(decreament(10))
store.dispatch(increament())

let count = store.getState();
console.log(count);