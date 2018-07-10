import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      id: 0,
      title: 'One',
      complete: false,
      archived: true
    }]
  },
  mutations: {
    addTodo (state, { title }) {
      const todo = {
        title,
        id: state.todos.length + 1,
        complete: false,
        archived: true
      }
      state.todos = [...state.todos, todo]
    },
    toggleComplete (state, { id }) {
      state.todos = state.todos.map(todo => {
        if (todo.id === id) return { ...todo, complete: !todo.complete }
        return todo
      })
    },
    archive (state, { id }) {
      state.todos = state.todos.map(todo => {
        if (todo.id === id) return { ...todo, archived: true }
        return todo
      })
    },
    delete (state, { id }) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  getters: {
    todos (state) {
      return state.todos.filter(todo => !todo.archived)
    },
    archivedTodos (state) {
      return state.todos.filter(todo => todo.archived)
    }
  },
  actions: {}
})
