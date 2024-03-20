<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <div class="card_container">
      <p>{{ item.id }} {{ item.title }}</p>
      <input type="checkbox" id="completeTask" name="completed" :checked="item.completed"/>
    </div>
  </div>
</template>

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
  /* -webkit-appearance: none;
  appearance: none; */
}

.card {
  max-width: 220px;
  padding: 1em;
  border-radius: 7px;
  /* box-shadow: 0 0 8px darkorange; */
  border: 3px dotted darkorange;
}

.card_container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

@media (min-width: 1024px) {
}
</style>
