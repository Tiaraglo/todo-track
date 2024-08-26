const TODOS_KEY = "todos";

const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem(TODOS_KEY);
  return todos ? JSON.parse(todos) : [];
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const state = () => ({
  todos: getTodosFromLocalStorage(),
});

export const mutations = {
  ADD_TODO(state, todoContent) {
    const newTodos = [
      { content: todoContent, completed: false },
      ...state.todos,
    ];
    state.todos = newTodos;
    saveTodosToLocalStorage(newTodos);
  },
  DELETE_TODO(state, todo) {
    const newTodos = state.todos.filter((t) => t !== todo);
    state.todos = newTodos;
    saveTodosToLocalStorage(newTodos);
  },
  TOGGLE_TODO(state, todo) {
    const newTodos = state.todos.map((t) =>
      t === todo ? { ...t, completed: !t.completed } : t
    );
    state.todos = newTodos;
    saveTodosToLocalStorage(newTodos);
  },
};

export const actions = {
  addTodo({ commit }, todoContent) {
    commit("ADD_TODO", todoContent);
  },
  deleteTodo({ commit }, todo) {
    commit("DELETE_TODO", todo);
  },
  toggleTodo({ commit }, todo) {
    commit("TOGGLE_TODO", todo);
  },
};

export const namespaced = true;
