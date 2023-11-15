<template>
    <div class="header-wrap">
        <button type="submit" button @click="setSearch(searchQuery)">
            <span class="pi pi-search"/>
        </button>
        <input type="text" placeholder="Search..." v-model="searchQuery" @keyup.enter="setSearch(searchQuery)">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {setSearch} from '../../../../js/general/search'

const searchQuery = ref('')
</script>

<style lang="scss" scoped>
.header-wrap{
    @include header;
        button{
            @include button;
            font-size: 20px;
        }
        input{
            width: 300px;
            height: $buttonHeight;
            @include reset;
            margin-left: 20px;
            @include secondaryText;
            
        }

}
</style>