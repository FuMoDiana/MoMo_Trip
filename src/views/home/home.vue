<template>
    <div class="home">
      <home-nav-bar/>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <home-search-box/>
      <!-- 日期 -->
    </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home';

//网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData(); 


</script>

<style lang="less" scoped>
  .home{
      .banner{
        img{
          width: 100%;
        }
      }
  }
</style>