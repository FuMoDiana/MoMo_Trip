<template>
    <div class="search-bar">
      <div class="selectTime">
          <div class="startime time">
              <div class="name">住|</div>
              <div class="date">{{nowDateStr}}</div>
          </div>
          <div class="endtime time">
              <div class="name">离|</div>
              <div class="date">{{nextDateStr}}</div>
          </div>
      </div>
      <div class="search">
          <div class="text">关键词/位置/民宿</div>
          <img src="@/assets/img/search/search.png" alt="">
      </div>
    </div>
</template>

<script setup>
import {computed} from 'vue';
import useMainStore from '@/stores/modules/main';
import {formatDate} from '@/utils/formatDate';
import {storeToRefs} from 'pinia';

const mainStore = useMainStore();
const {nowDate,nextDate} = storeToRefs(mainStore)
const nowDateStr = computed(()=>formatDate(nowDate.value,'MM.DD'))
const nextDateStr = computed(()=>formatDate(nextDate.value,'MM.DD'))

</script>

<style lang="less" scoped>
    .search-bar{
        position: fixed;
        width: 100%;
        height: 50px;
        background-color: var(--primary-color);
        z-index: 3;
        top: 0;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        .selectTime{
            display: flex;
            flex-direction: column;
            // border: 1px solid red;
            justify-content: center;
            align-items: center;
            margin: 6px;
            width: 20%;
            font-size: 14px;
            color: grey;
            background: #fff;
            border-radius: 10px;
            .time{
                display: flex;
                margin:5px 0;
                
            }
            .endtime{
                margin-top:0;
            }
        }

        .search{
            display: flex;
            justify-content: space-between;
            width: 80%;
            align-items: center;
            background: #fff;
            border-radius: 28px;
            margin:8px 0;
            margin-right: 5px;
            
            img{
                width: 25px;
                height: 25px;
                margin-right: 10px;
            }
            .text{
                color: grey;
                margin-left: 10px;
            }
        }
      }
</style>