<template>
    <div>
        <MailHeader/>
        <MailTitle/>
        <MailContent/>
        <MailFooter/>
    </div>
</template>

<script setup>
import MailHeader from './mailElements/MailHeader.vue';
import MailTitle from './mailElements/MailTitle.vue';
import MailContent from './mailElements/MailContent.vue';
import MailFooter from './mailElements/MailFooter.vue';
import { provide } from 'vue';
import { store } from '../../../store';
import { computed } from 'vue';

const mail = computed(() => store.state.mail);
provide('mail', mail)

</script>

<style lang="scss" scoped>

</style>