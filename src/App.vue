<template lang='pug'>
  section.mt6.mw5.center.w-100.avenir
    h1.tc.f3.fw7.ttu.tracked Todos
    hr.bt.b--moon-gray
    div.mb2
      template(v-for='(todo, i) in todos')
        Todo(v-bind:todo='todo')

    input(placeholder="New Todo" v-on:keyup.enter="addTodo($event)").w-100.border-box.pa1.br1.b--moon-gray.ba.bw1.f5

    template(v-if='archivedTodos.length > 0')
      div.mb5
      h1.tc.f5.fw5.ttu.tracked Archived Todos
      hr.bt.b--moon-gray
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
      //  do nothing for empty todo
      if (title) {
        //  clear input value
        event.target.value = ''
        this.$store.commit('addTodo', { title })
      }
    }
  }
}
</script>
