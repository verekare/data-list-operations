<template>
    <select 
        :model-value="selectedSort"
        @update:model-value="setSelectedSort">
        <option selected disabled value="">Сортировать...</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >{{ option.name }}</option>
    </select>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
defineProps({
    options: {
        type: Array,
        required: true
    }
})
const store = useStore();
const options = computed(() => store.state.items.sortOptions)
const selectedSort = computed(() => store.state.items.selectedSort)

</script>
<style>
    select {
        max-width: 200px;
    }
</style>