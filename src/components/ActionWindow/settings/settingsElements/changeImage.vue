<template>
    <div class="img-wrap">
        <div class="container">
            <img :src="img" alt="profile image" class="image">
            <div class="overlay">
                <span class="pi pi-upload"/>
            </div>
        </div>
        <div class="info">
            <h1>user name</h1>
            <p>usermail@Jets.yee</p>
        </div>
    </div>
</template>

<script setup>
import img from '../../../../img/profile.jpg'
import '../../../../fonts.css'
</script>

<style lang="scss" scoped>
.img-wrap{
    display: flex;
    align-items: center;
    .container{
        position: relative;
        width: 50%;
        max-width: 120px;
        .image{
            display: block;
            width: 100%;
            height: auto;
            border-radius: 15px;
            border: 3px solid $txtActiveClr;
            &:hover{
                cursor: pointer;
            }
        }
        .overlay{
            position: absolute; 
            bottom: 0; 
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: #f1f1f1; 
            width: 100%;
            transition: .5s ease;
            opacity:0;
            color: $txtActiveClr;
            font-size: 20px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }

        &:hover{
            .overlay{
                opacity: 1;
            }
        }
    }
    .info{
        margin-left: 20px;
        h1{
            font-family: 'Tilt Neon';
            font-size: 20px;
            color: $txtActiveClr;
        }
        p{
            margin-top: 5px;
            font-family: 'Tilt Neon';
            font-size: 12px;
            color: #BDC3C7;
        }
    }
}
</style>