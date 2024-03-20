<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TodoList from './components/TodoList.vue'
import Pagination from './components/Pagination.vue'
import MySelect from './components/UI/MySelect.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const items = computed(() => store.state.items.items);

const fetchItems = () => store.dispatch('items/fetchItems');
onMounted(() => fetchItems())
</script>

<template>
  <main>
    <h2 class="header">Todo List</h2>
    <!-- <select name="" id="">
      <option value="">Выберите из списка</option>
    </select> -->
    <MySelect></MySelect>
    <TodoList :items="items" />
    <Pagination />
    <nav>
    </nav>
  </main>
</template>

<style scoped>
.header {
  font-size: 2em;
  font-weight: 700;
  padding: 30px 0;
  color:darkorange;
}
main {
  line-height: 1.5;
  width: 100%;
}

@media (min-width: 1024px) {
  main {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

}
</style>./components/TodoList.vue