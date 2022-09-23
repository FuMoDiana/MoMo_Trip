<template>
    <div class="tab-bar">
      <template v-for="(item,index) in tabbarData" :key="index">
          <div class="tab-bar-item"  @click="changeActive(index,item.path)" :class="{active:activeIndex === index}">
              <img v-if="index == activeIndex" :src="getURL(item.imageActive )">
              <img v-else :src="getURL(item.image)">
              <span>{{item.text}}</span>
          </div>
      </template>
    </div>
</template>

<script setup>
import {getURL} from '@/utils/load_assets.js'
import tabbarData from '@/assets/data/tabbar.js' 
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const activeIndex =ref(0);
const router = useRouter();

function changeActive(index,url) {
    activeIndex.value = index
    router.push(url)
}

</script>

<style lang="less" scoped>

    .tab-bar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        display: flex;
        border-top: 1px solid pink;

        .tab-bar-item{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            img{
                width: 36px;
            }

            &.active{
                color: var(--primary-color)
            }

        }

    }

    
</style>