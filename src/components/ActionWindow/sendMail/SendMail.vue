<template>
    <div :class="store.state.blackTheme? 'send-wrap black':'send-wrap white'">
        <MailHeader/>
        <Form/>
    </div>
</template>

<script setup>
import MailHeader from '../SelectedMail/mailElements/MailHeader.vue';
import Form from './Form.vue';
import { store } from '../../../store';
</script>

<style lang="scss" scoped>
.send-wrap{
    width: 100%;
    height: 100%;
}
.black{
    background-color: $bgBlack;
}
.white{
    background-color: $bg;
}

</style>