import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../types/todoType';

export const addTodo = (todo: object) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const removeTodo = (id: String) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
export const updateTodo = (todo: object) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
