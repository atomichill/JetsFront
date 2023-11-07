<template>
    <div class="logout-wrap">
        <span class="pi pi-sign-out"></span>
        <button>Log out</button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logout-wrap{
    margin-top: 70px;
    width: 100vh;
    @include btn-wrap ;
    button{
        @include button
    }
    span{
        color:$txtUnactiveClr;
        cursor: pointer;
    }
    &:hover{
        background-color: $bgBtnClr;

        button{
            color:$txtActiveClr;
        }
        span{
            color:$txtActiveClr;
        }
    }
}
</style>