import { store } from "./store.js";

let count = store.getState().count;
console.log("2 " + count);
