<template>
    <div class="tab-bar">
        <van-tabbar v-model="activeIndex" active-color="rgb(255, 150, 69)" route>
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
import {ref,watch} from 'vue'
import {useRoute} from 'vue-router';

const activeIndex =ref(0);
const route = useRoute();
//监听路由的改变

watch(route,(newRoute)=>{
    // console.log(newRoute.path)
    const index = tabbarData.findIndex(item=> item.path === newRoute.path);
    if(index === -1) return
    activeIndex.value = index;
})

//直接使用路由切换不能改变tabbar的activeIndex,
// watch(activeIndex,(newValue)=>{
//     console.log(newValue)
// })

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