<template>
    <div :class="store.state.blackTheme? 'profview-wrap black':'profview-wrap'">
        <ProfData/>
    </div>
</template>

<script setup>
import ProfData from "./ProfData.vue"
import { store } from "../../../store";
</script>

<style lang="scss" scoped>
.profview-wrap{
    height: 100%;
    width: 100%;
    background-color: $bg;
    @include center;
}
.black{
    background-color: $bgBlack;
}
</style>