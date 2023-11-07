<template>
    <div class="block-wrap">
        <label for="block">Block user</label>
        <input type="text" placeholder="Enter Email.." name="block">
    </div>
</template>

<script setup>
import '../../../../fonts.css'
</script>

<style lang="scss" scoped>
.block-wrap{
    label{
        font-family: 'Tilt Neon';
        color: white;
    }
    input{
        @include inpt
    }
    ::placeholder{
        color: #BDC3C7;
    }
}
</style>