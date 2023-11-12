<template>
    <div :class="store.state.blackTheme ? 'profile-wrap black': 'profile-wrap'">
        <Image/>
        <Options/>
        <Settings/>
        <LogOut/>
    </div>
</template>

<script setup>
import Image from './ProfileElements/Image.vue';
import Options from './ProfileElements/Options.vue';
import Settings from './ProfileElements/Settings.vue';
import LogOut from './ProfileElements/LogOut.vue';
import { store } from '../../store';
</script>

<style lang="scss" scoped>
.profile-wrap{
    width: 310px;
    height: 100vh;
    background-color: $bg;

    @include flex-col;
}
.black{
    background-color: $bgBlack;
}
</style>