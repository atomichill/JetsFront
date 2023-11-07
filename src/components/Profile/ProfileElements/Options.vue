<template>
  <div class="options-wrap">
    <div class="btn-container">
      <div class="btn" v-for="item in items" :key="item.option" :id="item.option" @click="cntrl(item.option)">
        <span :class="item.icon"></span>
        <button>{{ item.option }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../../../fonts.css'
import {options} from '../../../js/settings/options'
import { cntrl } from '../../../js/cntrl';

const items = ref(options)
</script>

<style lang="scss" scoped>
.options-wrap {
  margin-top: 30px;
  .btn-container {
    @include btn-container;
    .btn {
        @include btn-wrap;
        button {
          @include button
        }
        span.pi {
        color: $txtUnactiveClr;
        }
        &:hover {
            background-color: $bgBtnClr;
            button {
                color: $txtActiveClr;
            }
            span.pi {
                color: $txtActiveClr;
            }
        }
    }
  }
}
</style>
