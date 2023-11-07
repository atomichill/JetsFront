<template>
    <div class="content-wrap">
        {{ mail.content }}
    </div>
</template>

<script setup>
import '../../../../fonts.css'
import { inject } from 'vue';

const mail = inject('mail')
</script>

<style lang="scss" scoped>
.content-wrap{
    padding: 20px;
    font-family: 'Tilt Neon';
    color:#7F8C8D;
    text-indent: 20px;
}
</style>