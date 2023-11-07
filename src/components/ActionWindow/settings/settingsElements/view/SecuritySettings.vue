<template>
    <div>
        <div>
            <BlockUser/>
            <BlockedUserList/>
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
</script>

<style lang="scss" scoped>
</style>