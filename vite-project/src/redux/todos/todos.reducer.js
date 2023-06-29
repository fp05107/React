import {
    TODOS_ADD,
    TODOS_DELETE,
    TODOS_GET,
    TODOS_UPDATE,
  } from "./todos.types";
  
  const initialState = {
    todos: [],
  };
  
  export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
      case TODOS_GET: {
        return {
          ...state,
          todos: payload,
        };
      }
      case TODOS_ADD: {
        return {
          ...state,
          todos: [...state.todos, payload],
        };
      }
      case TODOS_DELETE: {
        const filteredTodo = state.todos.filter((todo) => todo.id !== payload);
        return {
          ...state,
          todos: filteredTodo,
        };
      }
  
      case TODOS_UPDATE: {
        const updatedTodo = state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              ...payload.changes,
            };
          }
          return todo;
        });
        return {
          ...state,
          todos: updatedTodo,
        };
      }
      default: {
        return state;
      }
    }
  };
  