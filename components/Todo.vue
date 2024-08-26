<template>
  <div :class="`task ${todo.completed ? 'is-complete' : ''}`">
    <div class="content">{{ todo.content }}</div>
    <div class="buttons">
      <button @click="toggleDone">
        {{ todo.completed ? "Undo" : "Done" }}
      </button>
      <button @click="deleteTodo" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    toggleDone() {
      this.$store.commit("todos/TOGGLE_TODO", this.todo);
    },
    deleteTodo() {
      this.$store.commit("todos/DELETE_TODO", this.todo);
    },
  },
};
</script>

<style scoped>
.task {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.is-complete {
  background-color: #e0ffe0;
}
.buttons {
  margin-top: 10px;
}
.delete {
  color: red;
}
</style>
