<template>
    <div :class="store.state.blackTheme? 'welcome-wrap black': 'welcome-wrap'">
        <h1>Wellcome to Jets!</h1>
    </div>
</template>

<script setup>
import { store } from '../../store';
</script>

<style lang="scss" scoped>
.welcome-wrap{
    height: 100%;
    width: 100%;
    background-color: $bg;
    padding: 50px;
    @include center;

    h1{
        @include title;
        color: white;
        font-size: 20px;
    }
}
.black{
    background-color: $bgBlack;
}
</style>