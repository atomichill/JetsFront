<template>
    <div class="welcome-container">
        <div class="welcome-wrap">
            <router-view/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.welcome-container{
    display: flex;
    background-image: url('../../img/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    .welcome-wrap{
        width: 100vh;
        height: 100vh;
        @include center;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        background: rgba( 255, 255, 255, 0.15 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 20px );
        -webkit-backdrop-filter: blur( 20px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
}
</style>