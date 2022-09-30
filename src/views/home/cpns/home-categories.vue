<template>
    <div class="categories .border-bottom" >
        <template v-for="item in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{item.title}}</div>
            </div>
        </template>
    </div>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
    .categories{
        display: flex;
        overflow-x: auto;
        margin-top: 10px;
        //隐藏滚动条
        &::-webkit-scrollbar{
            display: none;
        }
        .item{
            display: flex;
            width: 70px;
            flex-shrink: 0;
            flex-direction: column;
            margin: 5px;
            justify-content: center;
            align-items: center;
            img{
            width: 32px;
            height: 32px;
            }
            .text{
                font-size: 12px;
                margin-top: 2px;
            }
        }
    }
</style>