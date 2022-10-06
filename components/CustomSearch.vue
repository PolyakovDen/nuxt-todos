<template>
  <div class="search">
    <input
      :value="value"
      placeholder="Search by title"
      type="text"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'CustomSearch',
  props: ['value']
}
</script>

<style scoped lang="scss">
  .search {
    display: flex;
    justify-content: center;
    padding-top: 10px;

    input {
      width: 420px;
      font-size: 12px;
      outline: none;
      border: 1px solid gray;
      border-radius: 4px;
      padding: 8px;
      color: gray;
      transition: 0.1s ease-out;
    }

    input:focus {
      border-color: #6200EE;
    }
  }
</style>
