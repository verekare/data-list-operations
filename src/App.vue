<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
import MyInput from './components/UI/MyInput.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const todos = computed(() => store.state.todos);

const fetchTodos = () => store.dispatch('fetchTodos');

const addTodo = (todo) => store.dispatch('addTodo', todo)

const removeTodo = (todo) => store.dispatch('removeTodo', todo);

const toggleTodo = (todo) => {
  // console.log(todo)
  store.dispatch('toggleTodo', todo)
}

onMounted(() => fetchTodos())
</script>

<template>
  <main>
    <!-- <MyInput></MyInput> -->
    <TodoForm
      :add="addTodo"
    ></TodoForm>
    <h2 v-if="todos.length > 0" class="header">To-dos</h2>
    <h2 v-else class="header">Nothing to do yet.</h2>
    <TodoList 
      :todos="todos" 
      :remove="removeTodo"
      :toggle="toggleTodo"
    />
  </main>
</template>

<style scoped>
body {
  padding-top: 70px;
}
.header {
  font-size: 2em;
  font-weight: 700;
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: inline-block;
}
main {
  line-height: 1.5;
  width: 100%;
  padding: 3rem;
}

@media (min-width: 920px) {
  main {
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
  }
}
</style>