<template>
    <div :class="store.state.blackTheme? 'settings-wrap black':'settings-wrap'">
        <changeImage/>
        <div class="general-settings" v-if="store.state.settings == ''">
            <h1>Preferences</h1>
            <Controller/>
        </div>
        <div class="general-settings" v-if="store.state.settings == 'User Profile'">
            <h1>Profile Settings</h1>
            <ProfileSettings/>
        </div>
        <div class="general-settings" v-if="store.state.settings == 'Security and Privacy'">
            <h1>Security and Privacy</h1>
            <SecuritySettings/>
        </div>
        <div class="general-settings" v-if="store.state.settings == 'Help and Support'">
            <h1>Help and Support</h1>
            <SupportSettings/>
        </div>
    </div>
</template>

<script setup>
import changeImage from './settingsElements/changeImage.vue'
import Controller from './settingsElements/Controller.vue'
import '../../../fonts.css'
import { store } from '../../../store';
import ProfileSettings from './settingsElements/view/ProfileSettings.vue';
import SecuritySettings from './settingsElements/view/SecuritySettings.vue';
import SupportSettings from './settingsElements/view/SupportSettings.vue';
</script>

<style lang="scss" scoped>
.settings-wrap{
    width: 100%;
    height: 100%;
    background-color: $bg;
    padding: 60px;

    .general-settings{
        @include flex-grd;
        h1{
            @include title
        }
    }
}
.black{
    background-color: $bgBlack;
}
</style>