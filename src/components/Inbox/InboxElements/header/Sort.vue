<template>
    <div class="sort-wrap">
        <label for="sort">Sort :</label>
        <select name="sort" id="sort" v-model="selectedSort" @change="handleSortChange">
            <option v-for="item in items" :value="item.value">{{ item.setting }}</option>
        </select>
    </div>
</template>

<script setup>
import '../../../../fonts.css'
import { ref } from 'vue';
import { sort } from '../../../../js/settings/sort';
import { setSort } from '../../../../js/general/setSort'

const items = ref(sort);
const selectedSort = ref('All'); 

function handleSortChange() {
    setSort(selectedSort.value);
}
</script>
<style lang="scss" scoped>
.sort-wrap{
    padding: 20px;
    label{
        font-size: 16px;
        color: #7F8C8D;
        font-family: 'Tilt Neon';
    }
    select{
        @include reset;
        font-size: 16px;
        color: #7F8C8D;
        font-family: 'Tilt Neon';

        option{
            @include reset;
        }
    }
}
</style>