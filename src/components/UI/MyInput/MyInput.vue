<template>
<input :value="modelValue" @input="updateInput" :class="$style.myInput" type="text">
</template>

<script setup>
const updateInput = (event) => {
    this.$emit('update:modelValue', event.target.value)
}
</script>

<style module lang="scss">
@import './MyInput.module.scss'
</style>