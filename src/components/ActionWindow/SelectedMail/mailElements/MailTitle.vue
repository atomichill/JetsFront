<template>
    <div class="title-wrap">
        <h1>{{mail.title}}</h1>
        <p>{{mail.from}}</p>
    </div>
</template>

<script setup>
import '../../../../fonts.css'
import { inject } from 'vue';

const mail = inject('mail')
</script>

<style lang="scss" scoped>
.title-wrap{
    height: 70px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid $txtUnactiveClr;

    h1{
        font-size: 25px;
        font-family: 'Tilt Neon';
    }
    p{
        margin-top: 10px;
        font-size: 14px;
        font-family: 'Tilt Neon';
        color:#7F8C8D;
    }
}
</style>