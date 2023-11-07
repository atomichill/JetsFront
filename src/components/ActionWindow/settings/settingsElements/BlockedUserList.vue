<template>
    <div class="block-container">
        <div v-for="item in items" class="block-wrap">
            <div class="block-item">
                {{ item.email }}
                <span class="pi pi-times"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { blocked } from '../../../../js/settings/blockedUsers';

const items = ref(blocked)

</script>

<style lang="scss" scoped>
.block-container{
    width: 180px;
    padding: 10px;
    background-color: $bgBtnClr;
    border-radius: 5px;
    margin-top: 5px;
    overflow: scroll;
    .block-wrap{
        margin-top: 10px;
        .block-item{
            display: flex;
            span{
                margin-left: 10px;
                cursor: pointer;
            }
        }
    }
}
</style>