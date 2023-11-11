<template>
    <div class="profview-wrap">
        <ProfData/>
    </div>
</template>

<script setup>
import ProfData from "./ProfData.vue"
</script>

<style lang="scss" scoped>
.profview-wrap{
    height: 100%;
    width: 100%;
    background-color: $bg;
    @include center;
}
</style>