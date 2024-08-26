export const state = () => ({
  todos: [],
});

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos = [{ content: todo, completed: false }, ...state.todos];
    // state.todo.push({ content: todo, completed: false });
    // state.todo.unshift({ content: todo, completed: false });
  },
  DELETE_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  TOOGLE_TODO(state, todo) {
    todo.completed = !todo.completed;
  },
};
