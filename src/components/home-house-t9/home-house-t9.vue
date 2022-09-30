<template>
    <div class="home-house">
        <div class="item-inner">
            <div class="cover">
              <img :src="itemData.image.url" alt="">
            </div>
            <div class="infos">
              <div class="summary">{{itemData.summaryText}}</div>
              <div class="name">{{itemData.houseName}}</div>
              <div class="price">
                <van-rate :model-value="Number(itemData.commentScore)" readonly allow-half size="16" color="#fff" />  
                <div class="new">￥{{itemData.finalPrice}}</div>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    itemData:{
        type:Object,
        default:{}
    }
})

</script>

<style lang="less" scoped>
    .home-house{
        width: 50%;

        .item-inner{
            position: relative;
            margin: 5px;
            background: #fff;
            border-radius: 6px;
            overflow: hidden;
            .cover{
                img{
                    width: 100%;
                }
            }

            .infos{
                position: absolute;
                color: #fff;
                bottom: 0;
                padding: 8px 6px;
                font-size: 12px;
                .price{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                }
            }
        }
        
    }
</style>