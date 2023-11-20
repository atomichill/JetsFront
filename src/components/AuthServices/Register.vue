<template>
    <div>
        <form action="submit" class="register-wrap">
            <input type="text" placeholder="name">
            <input type="text" placeholder="lastname">
            <input type="password" placeholder="password">
            <input type="email" placeholder="email">
            <button>Register</button>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.register-wrap{
    @include authFormStyles;
}
</style>