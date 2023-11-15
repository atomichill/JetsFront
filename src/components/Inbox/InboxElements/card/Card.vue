<template>
    <div :class="store.state.blackTheme? 'card-wrap black': 'card-wrap white'" v-for="item in filteredItems" @click="mailView(item)">
        <div class="card-header">
            <span v-if="!item.read" class="pi pi-bookmark"/>
            <span v-if="item.read" class="pi pi-bookmark-fill"/>
            <img :src="profile" alt="profile img">
            <div :class="store.state.blackTheme? 'head black-head': 'head'">
                <div>
                    <p>{{ item.from }}</p>
                    <div>
                        <h1>{{item.title}}</h1>
                    </div>
                </div>                
                <p>{{ item.time }}</p>
            </div>
        </div>
        <div class="text">
            {{ item.content }}
        </div> 
    </div>
</template>

<script setup>
import profile from '../../../../img/profile.jpg'
import '../../../../fonts.css'
import {mailView} from '../../../../js/general/mailView'
import { cards } from './card';
import { computed, ref} from 'vue';
import {store} from '../../../../store'
import { searchMail } from '../../../../js/general/search';

let items = ref(cards)

const filteredItems = computed(() => {
    let filteredCards = items.value;

    if (store.state.filter === 'Inbox') {
        // No additional filtering is required
    } else if (store.state.filter === 'Messages') {
        filteredCards = filteredCards.filter(card => card.rep);
    } else if (store.state.filter === 'Favourite') {
        filteredCards = filteredCards.filter(card => card.fav);
    }

    if (store.state.sort === 'Read') {
        filteredCards = filteredCards.filter(card => card.read);
    } else if (store.state.sort === 'Unread') {
        filteredCards = filteredCards.filter(card => !card.read);
    }

    if(store.state.search !== ''){
        filteredCards = searchMail(filteredCards,store.state.search)
    }

    return filteredCards;
})

</script>

<style lang="scss" scoped>
.card-wrap{
    height: 130px;
    width: 450px;
    padding: 10px;
    cursor: pointer;
    transition: 0.6s;
    border-radius: 15px;
    .card-header{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        img{
            width: 60px;
            height: 60px;
            border-radius: 10px;
        }

        span{
            color:#3498DB;
        }
        .head{
            width: 300px;
            display: flex;
            justify-content: space-between;
            p{
                @include secondaryText;
            }
            h1{
                margin-top: 10px;
                font-family: 'Tilt Neon';
                font-size: 18px; 
            }
        }
    }
    .text{
        width: 300px;
        height: 50px;
        white-space: normal; 
        word-wrap: break-word; 
        overflow: hidden;
        text-overflow: ellipsis; 
        margin-left: 115px;
        color:#7F8C8D;
        font-family: 'Tilt Neon'; 
    }
}
.white{
    &:hover{
        background-color: $cardActive;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
}
.black{
    &:hover{
        background-color: $cardActiveBlack;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
}
.black-head{
    h1{
        color: white;
    }
}
</style>