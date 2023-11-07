<template>
    <div class="footer-wrap">
        <button>click here to Reply</button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-top: 50px;

    button{
        @include button
    }

}
</style>