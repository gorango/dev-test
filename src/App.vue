<template lang='pug'>
  section.mt6.mw5.center.w-100
    h1.tc.f3.fw7.ttu.tracked Todos
    hr.bt.b--moon-gray
    div.mb5
      template(v-for='(todo, i) in todos')
        .flex.items-center.pl3.pv2.br2.shadow-4.mv3(
          v-if='!todo.status || todo.status !== "archived"',
          :class='todo.complete && "bg-moon-gray o-50"'
          style='cursor: pointer',
          @click='updateTodo(Object.assign({}, todo, {complete: !todo.complete}))'
        )
          input(
            v-model='todo.complete',
            type='checkbox',
            @update.stop.prevent='updateTodo(todo)'
          )
          span.relative.flex-auto.ml3(
            :class='todo.complete && "o-50"',
          ) {{todo.title}}
            span.absolute.left-0.right-0.bt.b--black.ph2.z-2(
              v-if='todo.complete'
              style='top: 50%; transform: translateY(-50%)'
            )
          a.ph3(
            @click.stop.prevent='updateTodo(Object.assign({}, todo, {status: "archived"}))'
          ) x
      form.mt3(@submit.stop.prevent='addTodo')
        input.w-100.pa2.ba.br2.b--moon-gray(
          v-model='newTodo',
          type='text',
          placeholder='New Todo'
        )
    template(v-if='todos.filter((todo) => todo.status === "archived").length')
      h1.tc.f5.fw5.ttu.tracked Archived Todos
      hr.bt.b--moon-gray
      div.mb5
        template(v-for='(todo, i) in todos')
          .flex.items-center.pl3.pv2.br2.shadow-4.mv3(
            v-if='todo.status && todo.status === "archived"',
            :class='todo.complete && "bg-moon-gray o-50"'
            style='cursor: pointer',
            @click='updateTodo(Object.assign({}, todo, {complete: !todo.complete}))'
          )
            input(
              v-model='todo.complete',
              type='checkbox',
              @update.stop.prevent='updateTodo(todo)'
            )
            span.relative.flex-auto.ml3(
              :class='todo.complete && "o-50"',
            ) {{todo.title}}
              span.absolute.left-0.right-0.bt.b--black.ph2.z-2(
                v-if='todo.complete'
                style='top: 50%; transform: translateY(-50%)'
              )
            a.ph3(
              @click.stop.prevent='removeTodo(todo)'
            ) x
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Index',
  components: {},
  data: () => ({
    newTodo: ''
  }),
  computed: {
    ...mapState(['todos'])
  },
  created () {},
  beforeDestroy () {},
  methods: {
    ...mapMutations(['updateTodo', 'removeTodo']),
    addTodo () {
      this.$store.commit('addTodo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>
