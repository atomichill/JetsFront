<template>
    <div>
        <form action="submit" class="login-wrap">
            <input type="email" placeholder="email...">
            <input type="password" placeholder="password..">
            <button>Login</button>
        </form>
    </div>
</template>

<script setup>
import '../../fonts.css'
</script>

<style lang="scss" scoped>
.login-wrap{
    @include authFormStyles;
}
</style>