<template>
    <form @submit.prevent>
        <input
            
            type="text"
            class="input" placeholder="a task to do"
        />
        <my-button 
        style="background: rgb(245, 245, 245);"
        @click="addTask">Add task
        </my-button>
    </form>
</template>
<script setup>
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';

const addTask = () => {
// add store 
}
</script>
<style lang="scss">
    form {
        margin: auto;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .input:focus {
    color: tomato;
    border: none;
}
</style>