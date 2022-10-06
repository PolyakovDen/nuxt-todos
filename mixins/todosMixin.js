export const todosMixin = {
  data: () => ({
    url: 'https://jsonplaceholder.typicode.com/todos',
    todos: [],
    isFetching: false
  }),
  methods: {
    fetchTodos: async function () {
      try {
        this.isFetching = true
        await this.$axios.$get(this.url)
          .then((res) => {
            this.todos = res
          })
        this.isFetching = false
      } catch (error) {
        this.isFetching = false
      }
    }
  },
  created: async function () {
    await this.fetchTodos()
  }
}
