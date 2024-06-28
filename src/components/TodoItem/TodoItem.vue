<template>
  <div :class="$style.card">
    <div :class="$style.card_container">
      <p :class="todo.completed ? $style.completedTask : $style.task">{{ todo.title }}</p>
      <input 
        type="checkbox" 
        id="completeTask" 
        name="completed"
        :checked="todo.completed" 
        @change="toggle(todo)"
      />
      <my-button 
        :class="$style.button__delete"
        @click="remove(todo)">
        <svg :class="$style.button__delete_icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <circle cx="12.5" cy="12.5" r="12" stroke="white"/>
            <path d="M7.55029 7.55023L17.4498 17.4497" stroke="white" stroke-linecap="round"/>
            <path d="M17.4497 7.55023L7.55023 17.4497" stroke="white" stroke-linecap="round"/>
        </svg>
      </my-button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  },
  remove: {
    type: Function,
    required: true
  },
  toggle: {
    type: Function,
    required: true
  },
})
</script>

<style module lang="scss">
@import './TodoItem.module.scss'
</style>
