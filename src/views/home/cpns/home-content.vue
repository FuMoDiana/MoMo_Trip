<template>
    <div class="content">
        <div class="title">
            <h2>热门精选</h2>
        </div>
      <div class="houseList">
          <template v-for="item in houseList" :key="item.houseId" >
              <home-house-t9 
                v-if="item.discoveryContentType === 9" 
                :itemData="item.data"
                @click="itemClick(item.data)" 
              />
              <home-house-t3 
                v-else-if="item.discoveryContentType === 3"  
                :itemData="item.data"
                @click="itemClick(item.data)"
              />
          </template>
      </div>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import {storeToRefs} from 'pinia';
import {useRouter, useRoute} from 'vue-router';
import HomeHouseT3 from '@/components/home-house-t3/home-house-t3.vue'
import HomeHouseT9 from '@/components/home-house-t9/home-house-t9.vue'

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)
const router = useRouter();

function itemClick(itemData){
    // console.log(itemData.houseId)
    router.push("/details/"+itemData.houseId)
}


</script>

<style lang="less" scoped>
    .content{
        margin: 10px 0;
        overflow-y: auto;
        .title{
            padding-left:15px;
        }
        .houseList{
            display: flex;
            flex-wrap: wrap;
        }
        
    }
</style>