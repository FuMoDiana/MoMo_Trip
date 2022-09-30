<template>
    <div class="search">
      <h2>startTime:{{$route.query.startTime}}</h2>
      <h2>endTime:{{$route.query.endTime}}</h2>
      <h2 v-if="$route.query.keyWord">keyWord:{{$route.query.keyWord}}</h2>
      <h2>currentCity:{{currentCity.cityName}}</h2>
    </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city'
// import {storeToRefs} from 'pinia';

const cityStore = useCityStore();
const {currentCity} = cityStore;

</script>

<style lang="less" scoped>
    
</style>