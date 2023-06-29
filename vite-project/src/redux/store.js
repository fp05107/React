import { combineReducers, legacy_createStore, compose } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { themeReducer } from "./theme/theme.reducer";
import { todoReducer } from "./todos/todos.reducer";

const rootReducer = combineReducers({
  counterManager: counterReducer,
  themeManager : themeReducer,
  todoManager : todoReducer,
});

const composer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(rootReducer, composer());
