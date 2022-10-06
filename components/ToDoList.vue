<template>
  <div class="to-do__list">
    <ToDoItem
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :completed="todo.completed"
    />
  </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue'
export default {
  name: 'ToDoList',
  components: { ToDoItem },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .to-do__list {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>
