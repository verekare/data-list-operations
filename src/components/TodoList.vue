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
    display: grid;
    /* flex-direction: column;
    row-gap: 15px; */
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, auto);
}    

</style>