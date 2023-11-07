<template>
    <div class="password-wrap">
        <label for="inpt">Change password</label>
        <input type="password" placeholder="Enter new password..." name="inpt">
        <input type="password" placeholder="Repeate password...">
        <button>Change</button>
    </div>
</template>

<script setup>
import '../../../../fonts.css'
</script>

<style lang="scss" scoped>
.password-wrap{
    display: flex;
    flex-direction: column;
    width: 300px;
    label{
        @include title
    }
    input{
        margin-top: 10px;
        @include inpt
    }
    ::placeholder{
        color: #BDC3C7;
    }
    button{
        margin-top: 10px;
        @include button
    }
}
</style>