<template>
    <div class="action-wrap">
        <span v-if="store.state.option == 'Email'">
            <SelectedMail/>
        </span>
        <span v-if="store.state.option == 'Send'">
            <sendMail/>
        </span>
        <span v-if="store.state.option == 'Settings'">
            <Settings/>
        </span>
        <span v-if="store.state.option == 'Profile'">
            <ProfileView/>
        </span>
        <span v-if="store.state.option == ''">
            <Wellcome/>
        </span>
    </div>
</template>

<script setup>
import SelectedMail from './SelectedMail/SelectedMail.vue';
import sendMail from './sendMail/sendMail.vue';
import Settings from './settings/Settings.vue';
import ProfileView from './profileView/ProfileView.vue';
import Wellcome from './Wellcome.vue';
import { store } from '../../store';
</script>

<style lang="scss" scoped>
.action-wrap{
    background-color:white;
    width: 100vh;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

}

</style>