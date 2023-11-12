<template>
    <div>

        <button @click="changeTheme()">Black theme</button>

    </div>
</template>

<script setup>
import { store } from '../../../../store';
import {changeTheme} from '../../../../js/general/changeTheme.js'
</script>

<style lang="scss" scoped>
</style>