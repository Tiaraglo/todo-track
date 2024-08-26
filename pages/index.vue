<template>
  <main>
    <h1>Todo's Track</h1>
    <p>Add Your Todo List, and Tracking It!</p>

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
      <!-- {{ $store.state.todos }} -->
      <Todo
        v-for="(todo, index) in $store.state.todos"
        :key="index"
        :todo="todo"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.commit("ADD_TODO", this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>
