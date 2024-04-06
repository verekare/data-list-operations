<template>
    <form @submit.prevent>
        <input
            v-model="todoTitle"
            type="text"
            class="input" placeholder="a task to do"
        />
        <my-button 
        style="background: rgb(245, 245, 245);"
        @click="add(todoTitle)">Add task
        </my-button>
    </form>
</template>
<script setup>
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';

defineProps({
    add: {
        type: Function,
        required: true
    }
})

</script>


<style lang="scss">
    form {
        margin: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .input:focus {
    color: tomato;
    border: none;
}
</style>