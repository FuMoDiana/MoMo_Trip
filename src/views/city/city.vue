<template>
<div class="city">
  <div class="top">
      <div class="city top-bar">
        <van-search 
          v-model="searchValue" 
          placeholder="请输入搜索关键词" 
          shape="round"
          background="white"
          show-action
          @cancel="cancelClick"
        />
        <van-tabs v-model:active="tabActive" type="line" color="rgb(255, 150, 69)">
          <template v-for="(value,key,index) in allCities" :key="key">
            <!-- tabActive自动绑定van-tab的name或者索引，默认为索引，设置name后为name，因此可以通过将allCities的key与对应tab的name绑定来对应数据 -->
            <van-tab :title="value.title" :name="key"></van-tab>
        </template>
        </van-tabs>
      </div>
  </div>
  <div class="content">
    <!-- 优化出现速度，v-show控制展示，一开始就准备好两个dom -->
    <template v-for="(value,key,index) in allCities" :key="key">
      <city-list v-show="tabActive === key" :groupData = "currentGroup"/>
    </template>
  </div>
</div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'
import useCityStore from '@/stores/modules/city'
import {storeToRefs} from 'pinia'
import CityList from './cpns/city-list.vue'

const router = useRouter()
//搜索框功能
const searchValue = ref("") 
const cancelClick = ()=>{
  router.back();
}

//城市选择功能
const tabActive = ref(0);

//网络请求：请求城市的数据
/**
 * 这里发送网络请求的缺点
 * 1.若网络请求太多，会导致页面组件中包含大量的对于网络请求和数据的处理逻辑
 * 2.如果页面封装了很多的组件，子组件需要这些数据的话只能一步一步传递，太繁琐
 */

// getAllCity().then(res=>{
//   console.log(res)
// })

//store中获取数据
const  cityStore = useCityStore()
cityStore.fetchAllCitiesAction()
const {allCities} = storeToRefs(cityStore)
console.log(allCities.value)
// console.log(allCities[tabActive])
//获取标签对应数据
//ref数据在js中要.value，在模板中不用
/**目的：获取选中标签的数据
 * 1.获取正确的key，将tab中绑定的tabActive用name绑定
 * 2.根据key从allCities中获取正确的数据，默认获取为非响应式，因此使用computed属性
 */
const currentGroup = computed(()=>allCities.value[tabActive.value])
</script>

<style lang="less" scoped>

  .city{
    //将顶部固定住
    .content{
      height: calc(100vh - 98px);
      overflow-y:auto;
    }
  }
</style>