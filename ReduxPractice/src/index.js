import { INC } from "./actionTypes.js";
import { store } from "./store.js";


store.dispatch({type: INC})
store.dispatch({type: INC})
store.dispatch({type: INC})

let count = store.getState();
console.log(count);