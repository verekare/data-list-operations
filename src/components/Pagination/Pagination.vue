<template>
    <div :class="$style.pageNumber_wrapper">
        <div 
            :class="pageNumber === page ? $style.currentPageNumber : $style.pageNumber"
            v-for="pageNumber of maxPage"
            :key="pageNumber"
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const page = computed(() => store.state.items.page)
const maxPage = computed(() => store.state.items.maxPage)

const changePage = (pageNumber) => {
    store.commit('items/setPage', pageNumber)
    console.log(pageNumber)
    store.dispatch('items/fetchItems')
}
</script>

<style module lang="scss">
@import './Pagination.module.scss'
</style>