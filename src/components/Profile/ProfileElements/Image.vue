<template>
    <div class="image-wrap">
        <h1>Welcome! user name</h1>
        <img :src='profile' alt="profile image" class="image">
        <p>username@jets.yee</p>
    </div>
</template>

<script setup>
import profile from '../../../img/profile.jpg'
import '../../../fonts.css'
</script>

<style lang="scss" scoped>
.image-wrap{
    margin-top: 30px;
    @include flex-col;
    justify-content: center;

    h1{
        font-size: 15px;
        font-family:'Tilt Neon';
        color:$txtActiveClr;
    }
    .image{
        margin-top: 10px;
        width: 70px;
        @include imgborder;
    }
    p{
        font-size: 13px;
        margin-top: 10px;
        font-family:'Tilt Neon';
        color: $txtActiveClr;
    }
}
</style>