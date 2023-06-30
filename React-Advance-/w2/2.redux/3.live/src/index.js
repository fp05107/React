import { DEC, INC } from "./actionType.js";
import { store } from "./store.js";

store.dispatch({ type: INC });
store.dispatch({ type: INC });
store.dispatch({ type: INC });
store.dispatch({ type: DEC });
let count = store.getState().count;
console.log("1 " + count);
