import { DEC, INC } from "./actionTypes.js";
import { legacy_createStore } from "redux";

let initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case DEC: {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export let store = legacy_createStore(counterReducer);
