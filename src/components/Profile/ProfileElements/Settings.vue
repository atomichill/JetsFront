<template>
  <div class="settings-wrap">
    <div class="btn" v-for="item in items" :key="item.setting" :id="item.setting" @click="cntrl(item.setting)">
        <span :class="item.icon"/>
        <button>{{ item.setting }}</button>
    </div>
  </div>
</template>

<script setup>
import { settings } from '../../../js/settings/settings';
import { cntrl } from '../../../js/cntrl';
import { ref } from 'vue';

const items = ref(settings)
</script>

<style lang="scss" scoped>
.settings-wrap{
    margin-top: 50px;
    @include btn-container;
    .btn{
      @include btn-wrap;
      button{
        @include button
      }
      span{
        color: $txtUnactiveClr;
        cursor: pointer;
      }
      &:hover{
        background-color: $bgBtnClr;

        button{
          color: $txtActiveClr;
        }
        span{
          color: $txtActiveClr;
        }
      }
    }
}
</style>