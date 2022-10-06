<template>
  <main class="main">
    <div v-if="!isFetching">
      <CustomSearch v-model="input" />

      <div v-if="displayedTodos.length > 0">
        <ToDoList :todos="displayedTodos" />
        <PaginationBar :pages="pages" :current-page="page" @setPage="setPage" />
      </div>

      <div v-else class="empty">
        No todos find
      </div>
    </div>

    <CustomLoader v-if="isFetching" />
  </main>
</template>

<script>
import ToDoList from '~/components/ToDoList.vue'
import PaginationBar from '~/components/PaginationBar.vue'
import CustomLoader from '~/components/CustomLoader.vue'
import CustomSearch from '~/components/CustomSearch.vue'

import { todosMixin } from '~/mixins/todosMixin'

export default {
  name: 'IndexPage',
  components: { ToDoList, PaginationBar, CustomLoader, CustomSearch },
  mixins: [todosMixin],
  data () {
    return {
      pages: [],
      page: 1,
      perPage: 25,
      input: ''
    }
  },
  computed: {
    displayedTodos () {
      return this.paginateTodos(this.todos.filter(el => el.title.toLowerCase().includes(this.input.toLowerCase())))
    }
  },
  watch: {
    input () {
      this.page = 1
    }
  },
  methods: {
    setPages (todos) {
      this.pages = []
      const numberOfPages = Math.ceil(todos.length / this.perPage)

      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i)
      }
    },
    setPage (page) {
      this.page = page
    },
    paginateTodos (todos) {
      const page = this.page
      const perPage = this.perPage
      const from = (page * perPage) - perPage
      const to = (page * perPage)
      this.setPages(todos)

      return todos.slice(from, to)
    }
  }
}
</script>

<style scoped lang="scss">
  .main {
    background-color: #FCDDBC;
    height: 100vh;
  }

  .empty {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
  }
</style>
