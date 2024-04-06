<template>
  <div class="card" :class="{completed: todo.completed}">
    <div class="card_container">
      <p>{{ todo.title }}</p>
      <input 
        type="checkbox" 
        id="completeTask" 
        name="completed" 
        :checked="todo.completed" 
        @change="toggle(todo)"
      />
      <my-button 
        class="button__delete"
        @click="remove(todo)">
        <svg class="button__delete_icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
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

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

p {
  font-size: .7rem;
}
input[type=checkbox] {
  border-radius: 50%;
  border: 1px solid darkorange;
  width: 25px;
  height: 25px;
  position: absolute;
  left: -50px;
  opacity: 0;
  transition: all .2s ease-out;
  /* -webkit-appearance: none;
  appearance: none; */
}
.card:hover input[type=checkbox] {
  opacity: 100%;
}

.card {
  padding: 10px;
  padding-left: 15px;
  margin-top: 20px;
  font-weight: 500;
  border: 2px solid whitesmoke;
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.completed {
  text-decoration: line-through;
}

.card_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;
}

.button__delete {
  background: none;
  position: relative; 
  opacity: 0;
  transition: all .2s ease-out;
  justify-self: flex-end;
  left: -20px;
}

.button__delete_icon {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

.card:hover .button__delete {
  opacity: 100%;
}

@media (min-width: 1024px) {
}
</style>
