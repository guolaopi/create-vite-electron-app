<template>
    <div>
        <hello-world :msg="msg" />
        <button @click="callNodeApi">Call Node Api</button>
        <button @click="callNetRequest">Call Electron Net Request</button>
        <div>
            {{ result }}
        </div>
    </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const msg = "Welcome";
const result = ref("");

async function callNodeApi() {
    const resStr = await window.electronAPI.readFile();
    console.log("callNodeApi result:", resStr);
    result.value = resStr;
}
async function callNetRequest() {
    const resStr = await window.electronAPI.netRequest("https://cn.bing.com/");
    console.log("callNetRequest result:", resStr);
    result.value = resStr;
}
</script>

<style lang="scss" scoped>
</style>