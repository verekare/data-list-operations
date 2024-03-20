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

<template>
    <div class="pageNumber_wrapper">
        <div 
            class="pageNumber"
            :class="{
                'currentPageNumber': pageNumber === page 
            }"
            v-for="pageNumber of maxPage"
            :key="pageNumber"
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<style>
.pageNumber_wrapper {
    display: flex;
    gap: 15px;
    margin-top: 3em;
    align-items: center;
}
.pageNumber {
    cursor: pointer;
    width: 30px;
    color: darkorange;
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    border-radius: 50%;
}
.currentPageNumber {
    text-align: center;
    border: 2px solid darkorange;
    /* background-color: darkorange; */
}
</style>