<template>
    <button>
        <slot></slot>
    </button>
</template>

<style>
    button {
        padding: 3px;
        margin-left: 5px;
        border: none;
        border-radius: 20px;
        background-color: whitesmoke;
        color: tomato;
        font-family: Avenir;
        font-weight: 500;
        text-transform: uppercase;
        position: relative;
    }
    button:active {
        background-color: whitesmoke;
        color: tomato;
    }
</style>