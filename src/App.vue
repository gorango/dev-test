<template lang='pug'>
  section.mt6.mw5.center.w-100
    h1.tc.f3.fw7.ttu.tracked Todos
    hr.bt.b--moon-gray
    div.mb5
      template(v-for='(todo, i) in todos')
        Todo(v-bind:todo='todo')

    input(placeholder="New Todo" v-on:keyup.enter="addTodo($event)").br2

    template(v-if='archivedTodos.length > 0')
      h1.tc.f5.fw5.ttu.tracked Archived Todos
      hr.bt.b--moon-gray
      div.mb5
      template(v-for='(todo, i) in archivedTodos')
        Todo(v-bind:todo='todo')
</template>

<script>
import {mapGetters} from 'vuex'

import Todo from './components/Todo'

export default {
  components: {
    Todo
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'todos',
      'archivedTodos'
    ])
  },
  methods: {
    addTodo (event) {
      const title = event.target.value
      //  clear input value
      event.target.value = ''
      this.$store.commit('addTodo', { title })
    }
  }
}
</script>
