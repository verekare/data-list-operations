<script setup>
import TodoItem from './TodoItem.vue'
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
<template>
    <div class="items_layout">
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
<style>
.items_layout {
    display: flex;
    flex-direction: column;
}    

</style>