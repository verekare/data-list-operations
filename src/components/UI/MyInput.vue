<template>
<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script setup>

const updateInput = (event) => {
    this.$emit('update:modelValue', event.target.value)
}

</script>

<style>
.input {
    padding: 10px 15px;
    border: none;
    background-color: whitesmoke;
    font-family: Avenir;
    font-weight: 500;
}
.input::placeholder {
    color: rgb(255, 154, 136);
}
.input:focus {
    color: tomato;
    border: none;
}
</style>