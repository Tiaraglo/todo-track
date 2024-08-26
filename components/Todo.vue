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
      this.$store.commit("TOOGLE_TODO", this.todo);
    },
    deleteTodo() {
      this.$store.commit("DELETE_TODO", this.todo);
    },
  },
};
</script>
