<template>
    <div>
        <div class="block-window-wrap">
            <BlockUser/>
            <button @click="toggleBlockWindow()"> 
                Blocked user list 
                <!-- Needs optimization -->
                <span v-if="!store.state.showBlockWindow" class="pi pi-chevron-down"/>
                <span v-if="store.state.showBlockWindow" class="pi pi-chevron-up"/>
            </button>
            <span v-if="store.state.showBlockWindow">
                <BlockedUserList/>
            </span>
        </div>
        <ChangePasscode/>
        <GetBack/>
    </div>
</template>

<script setup>
import BlockUser from '../BlockUser.vue';
import GetBack from '../GetBack.vue';
import ChangePasscode from '../ChangePasscode.vue';
import BlockedUserList from '../BlockedUserList.vue';
import { toggleBlockWindow } from '../../../../../js/general/blockWindow';
import { store } from '../../../../../store';
</script>

<style lang="scss" scoped>
.block-window-wrap{
    button{
        margin-top: 10px;
        @include button;
        &:hover{
            color:white;
        }
    }
}
</style>