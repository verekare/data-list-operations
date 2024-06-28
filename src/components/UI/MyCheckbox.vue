<template>
    <input 
        type="checkbox" 
        id="completeTask" 
        name="completed" 
    />
</template>

<style>
input[type=checkbox] {
  border-radius: 50%;
  border: 1px solid darkorange;
  width: 25px;
  height: 25px;
  position: absolute;
  /* top: 0; */
  left: -50px;
  opacity: 0;
  transition: all .2s ease-out;
  /* -webkit-appearance: none;
  appearance: none; */
}
</style>