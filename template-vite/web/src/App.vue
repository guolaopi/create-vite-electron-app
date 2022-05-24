<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to vite-electron-template" />
        <button @click="callNodeApi">Call Node API</button>
        <div>{{ nodeResult }}</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const nodeResult = ref();

const callNodeApi = async () => {
    nodeResult.value = await window.electronAPI.readFile();
};
</script>

<style lang="scss" scoped>
</style>