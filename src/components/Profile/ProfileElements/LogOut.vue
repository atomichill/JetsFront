<template>
    <div class="logout-container">
        <div :class="store.state.blackTheme? 'logout-wrap black': 'logout-wrap white'">
            <span class="pi pi-sign-out"></span>
            <button>Log out</button>
        </div>
    </div>
</template>

<script setup>
import { store } from '../../../store';
</script>

<style lang="scss" scoped>
.logout-container{
    margin-top: 40px;
    .logout-wrap{
        width: 100vh;
        @include btn-wrap ;
        button{
            @include button
        }
        span{
            color:$txtUnactiveClr;
            cursor: pointer;
        }
    }
    .white{
        @include hoverwhite;
    }
    .black{
        @include hoverblack;
    }
}
</style>