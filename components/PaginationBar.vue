<template>
  <div class="pages">
    <div
      v-for="page in pages"
      :key="page"
      class="page"
      :class="{'page_active': currentPage == page}"
      @click="$emit('setPage', page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBat',
  props: {
    pages: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .pages {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .page {
    width: 30px;
    height: 30px;
    background-color: #EF959D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 4px;

    &:last-child {
      margin-right: 0;
    }

    &:hover,
    &_active {
      background-color: #69585F;
      color: #D9DBBC;
      transition: background-color .3s;
    }
  }
</style>
