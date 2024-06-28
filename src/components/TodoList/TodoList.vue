<template>
    <div :class="$style.itemsLayout">
        <TodoItem 
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            :remove="remove"
            :toggle="toggle"
            :edit="edit"
        >
        </TodoItem>
    </div>
</template>

<script setup>
import TodoItem from '@/components/TodoItem/TodoItem.vue'
defineProps({
    todos: {
        type: Array,
        required: true
    },
    remove: {
        type: Function
    },
    toggle: {
        type: Function
    },
    edit: {
        type: Function
    },
})  
</script>

<style module lang="scss">
@import './TodoList.module.scss'
</style>