<template>
  <div class="settings-wrap">
    <div :class="store.state.blackTheme? 'btn black': 'btn white'" v-for="item in items" :key="item.setting" :id="item.setting" @click="cntrl(item.setting)">
        <span :class="item.icon"/>
        <button>{{ item.setting }}</button>
    </div>
  </div>
</template>

<script setup>
import { settings } from '../../../js/settings/settings';
import { cntrl } from '../../../js/cntrl';
import { ref } from 'vue';
import { store } from '../../../store';
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
    }
}
.black{
  &:hover{
    background-color: $bgBtnActive;

    button{
      color: $txtActiveBlack;
    }
    span{
      color: $txtActiveBlack;
    }
  }
}
.white{
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

</style>