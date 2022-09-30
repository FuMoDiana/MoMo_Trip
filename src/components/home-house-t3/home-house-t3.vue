<template>
    <div class="home-house">
      <div class="item-inner">
        <div class="cover">
          <img :src="itemData.image.url" alt="">
        </div>
        <div class="infos">
          <div class="location">
            <img src="@/assets/img/home/location.png" alt="">
            <span class="locationText">{{itemData.location}}</span>
          </div>
          <div class="infos">
            <div class="name">{{itemData.houseName}}</div>
            <div class="summary">{{itemData.summaryText}}</div>
            <div class="price">
                <div class="new">￥{{itemData.finalPrice}}</div>
                <div class="old">￥{{itemData.productPrice}}</div>
                <div class="diffprice">{{itemData?.priceTipBadge?.text}}</div>
              </div>
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
        background: #fff;
        overflow: hidden;
        margin: 5px;
        .location{
          margin: 5px;
          img{
            width: 14px;
          }

          .locationText{
            font-size: 12px;
            color: gray;
          }
        }
        .cover{
          img{
            width: 100%;
            border-radius: 6px;
          }
      }

      .infos{
        .price{
          display: flex;
          margin-top: 10px;
          .old{
            text-decoration: line-through;
            font-size: 12px;
            color: gray;
            padding: 0 5px;
          }

          .new{
            color: var(--primary-color);
          }

          .diffprice{
            border: 1px solid red;
            border-radius: 8px;
            background-color: red;
            color: #fff;
            padding: 2px;
            font-size: 10px;
          }
        }
      }
      }
      
    }
</style>