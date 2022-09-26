<template>
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
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外">2222</van-tab>
    </van-tabs>

      
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {getAllCity} from '@/service'

const router = useRouter()
//搜索框功能
const searchValue = ref("") 
const cancelClick = ()=>{
  router.back();
}

//城市选择功能
const tabActive = ref(0);

//网络请求：请求城市的数据
getAllCity().then(res=>{
  console.log(res)
})

</script>

<style lang="less" scoped>

</style>