import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../types/todoType';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: any) =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
