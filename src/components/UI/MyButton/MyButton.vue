<template>
    <button :class="$style.myButton">
        <slot></slot>
    </button>
</template>

<style module lang="scss">
@import './MyButton.module.scss'
</style>