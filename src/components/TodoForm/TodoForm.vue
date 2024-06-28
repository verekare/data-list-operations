<template>
    <form @submit.prevent :class="$style.formBlock">
        <MyInput
            v-model="todoTitle"
            type="text"
            placeholder="a task to do"
        />
        <MyButton @click="add(todoTitle)">
            Add task
        </MyButton>
    </form>
</template>
<script setup>
import MyButton from '@/components/UI/MyButton/MyButton.vue';
import MyInput from '@/components/UI/MyInput/MyInput.vue';

defineProps({
    add: {
        type: Function,
        required: true
    }
})
</script>

<style lang="scss" module>
@import './TodoForm.module.scss'
</style>