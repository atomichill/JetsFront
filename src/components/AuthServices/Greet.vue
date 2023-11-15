<template>
    <h1>welcome to jets</h1>
    <div class="btn-wrap">
        <button @click="toLogin()">Login</button>
        <p>or</p>
        <button @click="toReg()">Register</button>
    </div>  
</template>

<script setup>
import { toLogin } from '../../js/routing/routing';
import { toReg } from '../../js/routing/routing';
</script>

<style lang="scss" scoped>
h1{
    @include title;
    color: $bgBtnClr;
    font-size: 40px;
}
.btn-wrap{
    display: flex;
    button{
        @include button;
        font-size: 20px;
        color: $bgBtnClr;
    }
    p{
        @include title;
        color: $bgBtnClr;
    }
}
    
</style>