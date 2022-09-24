<template>
    <div class="tab-bar">
        <van-tabbar v-model="activeIndex" active-color="rgb(255, 150, 69)">
            <template v-for="(item,index) in tabbarData" :key="index">
            <van-tabbar-item  :to="item.path">
                <span>{{item.text}}</span>
                <!-- 具名插槽 -->
                <template #icon="img">
                    <img v-if="index == activeIndex" :src="getURL(item.imageActive )">
                    <img v-else :src="getURL(item.image)">                    
                </template>
            </van-tabbar-item>
            </template>
        </van-tabbar>    
      <!-- <template v-for="(item,index) in tabbarData" :key="index">
          <div class="tab-bar-item"  @click="changeActive(index,item.path)" :class="{active:activeIndex === index}">
              <img v-if="index == activeIndex" :src="getURL(item.imageActive )">
              <img v-else :src="getURL(item.image)">
              <span>{{item.text}}</span>
          </div>
      </template> -->
    </div>
</template>

<script setup>
import {getURL} from '@/utils/load_assets.js'
import tabbarData from '@/assets/data/tabbar.js' 
import {ref} from 'vue'

const activeIndex =ref(0);


</script>

<style lang="less" scoped>

 .tab_bar {
     :deep(.van-tabbar-item__icon){
         font-size: 50px;
     }
     img{
         height: 36px;
     }
 }

    
</style>