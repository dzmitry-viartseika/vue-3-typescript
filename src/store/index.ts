import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
