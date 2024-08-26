<template>
  <main>
    <h1>Todo's Track</h1>
    <p>Add Your Todo List, and Track It!</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTodo"
        placeholder="Add a new todo list"
        @keypress.enter="addTodo"
      />
      <button @click="addTodo">Add</button>
    </div>

    <div class="tasks">
      <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </div>
  </main>
</template>

<script>
import Todo from "~/components/todo.vue";

export default {
  components: { Todo },
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.commit("todos/ADD_TODO", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>
