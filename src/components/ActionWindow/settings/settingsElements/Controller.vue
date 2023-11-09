<template>
    <div class="controller-wrap">
        <div v-for="setting in settings" :key="setting.setting" class="set" @click="setSetting(setting.setting)">
            <div class="txt-wrap">
                <div>
                    <span :class="setting.icon"/>
                </div>
                <div class="txt">
                    <h1>{{ setting.setting }}</h1>
                    <p>{{ setting.desc }}</p>
                </div>
            </div>
            <span class="pi pi-angle-right"/>
        </div>
    </div>
</template>

<script setup>
import { controller } from '../../../../js/settings/controller';
import { ref } from 'vue';
import '../../../../fonts.css'
import { setSetting } from '../../../../js/general/profileSettings';
const settings = ref(controller)
</script>

<style lang="scss" scoped>

.controller-wrap{
    .set{
        display: flex;
        width: 350px;
        height: 50px;
        justify-content: space-between;
        margin-top: 20px;
        cursor: pointer;
        span{
            color: #d2d7d8;
        }
        .txt-wrap{
            display: flex;
            .txt{
                margin-left: 10px;
                h1{
                font-family: 'Tilt Neon';
                font-size: 18px;
                color: #d2d7d8;
                }
                p{
                    font-family: 'Tilt Neon';
                    color: #BDC3C7;
                }
                }
        }

        &:hover{
            span{
                color:$txtActiveClr;
            }
            .txt{
                h1{
                    color:$txtActiveClr;
                }
            }
        }
    }
}
</style>