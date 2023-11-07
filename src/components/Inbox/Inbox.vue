<template>
    <div class="inbox-wrap">
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
</style>