<template>
    <div :class="store.state.blackTheme? 'inbox-wrap black': 'inbox-wrap'">
        <InboxHeader/>
        <Sort/>
        <div class="cards">
            <Card/>
        </div>
    </div>
</template>

<script setup>
import InboxHeader from './InboxElements/header/InboxHeader.vue';
import Sort from './InboxElements/header/Sort.vue'
import Card from './InboxElements/card/Card.vue';
import { store } from '../../store';
</script>

<style lang="scss" scoped>
.inbox-wrap{
    background-color: #e9eef1;
    width: 570px;
    height: 100vh;
    .cards{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
        height: 480px;
    }
}
.black{
    background-color: #34495E;
}
</style>