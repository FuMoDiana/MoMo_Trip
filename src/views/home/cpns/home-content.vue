<template>
    <div class="content">
      <div class="hotSuggests">
        <template v-for="(item,index) in hotSuggests" :key="index">
          <div 
          class="item" 
          :style="{color:item.tagText.color,background:item.tagText.background.color}"> 
            {{item.tagText.text}}
          </div>
        </template>
      </div>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import {storeToRefs} from 'pinia'

//热门建议
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData();
const {hotSuggests} = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
    .content{
        .hotSuggests{
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0;
      padding-left: 10px;
      .item{
        border-radius: 10px;
        padding: 4px 3px;
        margin: 5px;
        
      }
    }
    }
</style>