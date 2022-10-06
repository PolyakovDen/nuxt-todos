<template>
  <div
    class="to-do-item"
    :class="{'to-do-item_completed': completed}"
  >
    <div class="to-do-item__title">
      <span>{{ title }}</span>
    </div>
    <div
      v-if="completed"
      class="check-icon"
    />
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .to-do-item {
    position: relative;
    background-color: #EF959D;
    color: #69585F;
    width: 200px;
    height: 120px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid gray;

    &_completed {
      border-color: greenyellow;
    }

    &__title {
      &:first-letter {
        text-transform: capitalize;
      }
    }

    .check-icon {
      color: greenyellow;
      position: absolute;
      top: 7px;
      right: 7px;
      width: 14px;
      height: 8px;
      border-bottom: solid 1px currentColor;
      border-left: solid 1px currentColor;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
    }
  }
</style>
