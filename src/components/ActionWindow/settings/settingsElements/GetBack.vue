<template>
    <div class="fixed-btn">
        <button @click="clearSetting()">
            <span class="pi pi-angle-double-left"/>
            Get Back
        </button>
    </div>
</template>

<script setup>
import { clearSetting } from '../../../../js/general/profileSettings';
</script>

<style lang="scss" scoped>
.fixed-btn{
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    button{
    @include button;
    @include center;
    font-size: 18px;
    &:hover{
        color: $txtActiveClr;
    }
}
}
</style>