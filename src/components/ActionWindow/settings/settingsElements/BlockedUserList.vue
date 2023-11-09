<template>
  <div class="block-container">
    <div class="block-wrap">
      <div v-for="item in items" class="block-item">
        {{ item.email }}
        <span class="pi pi-times" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { blocked } from '../../../../js/settings/blockedUsers';
const items = ref(blocked);
</script>

<style lang="scss" scoped>
.block-container {
  width: 290px;
  padding: 10px;
  background-color: $bgBtnClr;
  margin-top: 5px;
  border-radius: 10px;
  .block-wrap {
    height: 100px;
    overflow: auto;
    
    .block-item{
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      color: $txtActiveClr;
      font-family: 'Tilt Neon';

      span{
        cursor: pointer;

        &:hover{
          color: blue;
        }
      }
    }

  }
}
</style>
