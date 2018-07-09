import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      id: 0,
      title: 'One',
      complete: false
    }]
  },
  mutations: {
    addTodo: (state, title) => {
      const todo = {
        title,
        id: Math.round(Math.random() * 1000) + 1,
        complete: false
      }
      Vue.set(state, 'todos', [...state.todos, todo])
    },
    updateTodo: (state, todo) => {
      const todos = state.todos.map(t =>
        t.id === todo.id
          ? todo
          : t
      )
      Vue.set(state, 'todos', todos)
    },
    removeTodo: (state, todo) => {
      const todos = state.todos.filter(({id}) => id !== todo.id)
      Vue.set(state, 'todos', todos)
    }
  },
  actions: {
  }
})
