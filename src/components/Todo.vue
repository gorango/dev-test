<template lang="pug">
  div.flex.justify-between.shadow-1.avenir.br2.noselect
    div(v-on:click="toggleComplete").flex.items-center.w-100-l
      input(type="checkbox" v-model="todo.complete").ml2
      div.relative.ml2.w-100-l
        div {{todo.title}}
        div(v-bind:class="{ activeStrikeThrough: todo.complete }")
    div(v-on:click="handleCloseClick").rotate-45.f1.mr2.clickable +
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    toggleComplete () {
      const id = this.todo.id
      console.log('toggle complete for', id)
      this.$store.commit('toggleComplete', { id })
    },
    archive () {
      const id = this.todo.id
      console.log('archive', id)
      this.$store.commit('archive', { id })
    },
    handleCloseClick () {
      const { id, archived } = this.todo
      this.$store.dispatch('handleCloseClick', { id, archived })
    }
  }
}
</script>
z
<style scoped>
.noselect {
  user-select: none;
}
.clickable {
  cursor: pointer;
}
.activeStrikeThrough{
  border-bottom: 3px solid #000;
  content: "";
  line-height: 1em;
  left: 0;
  position: absolute;
  right: 0;
  top: calc(50% - 3px);
}
</style>
