<template lang="pug">
  div.flex.pa1.justify-between.shadow-4.br2.noselect.border-box.mb3
    div(v-on:click="toggleComplete").flex.items-center.w-100
      input(type="checkbox" v-model="todo.complete").ml2
      div.relative.ml2.w-100
        div {{todo.title}}
        div(v-bind:class="{ activeStrikeThrough: todo.complete }")
    div(v-on:click="handleCloseClick").rotate-45.f3.mr2.clickable +
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    toggleComplete () {
      const id = this.todo.id
      this.$store.commit('toggleComplete', { id })
    },
    handleCloseClick () {
      const { id, archived } = this.todo
      this.$store.dispatch('handleCloseClick', { id, archived })
    }
  }
}
</script>

<style scoped>
.noselect {
  user-select: none;
}
.clickable {
  cursor: pointer;
}
.activeStrikeThrough{
  border-bottom: 2px solid #000;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
</style>
