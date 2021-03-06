import { Add_Todo, Remove_Todo } from "./actions";
export function Reducer(
  state = {
    todos: [],
    count: 0,
  },
  action
) {
  console.log(action.todos);
  switch (action.type) {
    case Add_Todo:
      return {
        count: state.count + 1,
        todos: [...state.todos, action.todos],
        count: state.count + 1,
      };
    case Remove_Todo:
      console.log(action);
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
        count: state.count - 1,
      };
    default:
      return state;
  }
}
