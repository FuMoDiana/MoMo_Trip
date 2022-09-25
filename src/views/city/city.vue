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
      
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
//搜索框功能
const searchValue = ref("") 
const cancelClick = ()=>{
  router.back();
}

</script>

<style lang="less" scoped>

</style>