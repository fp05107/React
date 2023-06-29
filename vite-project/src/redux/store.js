import {
  combineReducers,
  legacy_createStore,
  compose,
  applyMiddleware,
} from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { themeReducer } from "./theme/theme.reducer";
import { todoReducer } from "./todos/todos.reducer";

const rootReducer = combineReducers({
  counterManager: counterReducer,
  themeManager: themeReducer,
  todoManager: todoReducer,
});

const composer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const logger = (state) => (next) => (action) => {
  console.log("prev", state.getState());
  let resp = next(action);
  console.log("logger 2 next");
  return resp;
};

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(logger))
);
// composer()
