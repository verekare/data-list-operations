<script setup>
import TodoItem from './TodoItem.vue'
defineProps({
    items: {
        type: Array,
        required: true
    }
})
    

</script>
<template>
    <div class="items_layout">
        <TodoItem 
            v-for="item in items"
            :key="item.id"
            :item="item"
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