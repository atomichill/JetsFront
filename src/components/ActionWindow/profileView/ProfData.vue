<template>
    <div class="imgview-wrap">
        <div class="img-container">
            <img :src="img" alt="img">
            <div class="info-container">
                <p>name: username</p>
                <p>lastname: userlastname</p>
                <p>email: useremail</p>
                <p>status: active</p>
                <p>role: user</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import img from '../../../img/profile.jpg'
</script>

<style lang="scss" scoped>
.imgview-wrap{
    .img-container{
        display: flex;
        img{
            width: 130px;
            @include imgborder;
        }
        .info-container{
            margin-left: 10px;
            p{
                margin-top: 5px;
                @include text;
            }
        }
    }
}
</style>