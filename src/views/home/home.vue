<template>
    <div class="home">
      <home-nav-bar />
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <home-search-box />
      <search-bar v-if="isShowSearch" />
      <home-categories />
      <home-content />
    </div>
</template>

<script setup>
import {watch,ref, computed} from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue';
import HomeContent from './cpns/home-content.vue';
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll';
import SearchBar from './cpns/search-bar.vue'
//网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData(); 
homeStore.fetchHomeCategories();
homeStore.fetchHomeHouseList();



//默认加载更多，监听window滚动条
//滚动条顶部已经滚动的长度：scrollTop+clientHeight(屏幕高度)=scrollHeight(文档总长度)

/**尝试一：在组件内部进行监听，控制加载数据的节点
* 缺点：复用性差，滑动加载可以抽离成hook函数。
*/
// const scrollBottom = ()=>{
//   const scrollTop = document.documentElement.scrollTop;
//   const scrollHeight = document.documentElement.scrollHeight;
//   const clientHeight = document.documentElement.clientHeight;
//   if(scrollTop+clientHeight+1 >= scrollHeight){
//     console.log("加载数据")
//     homeStore.fetchHomeHouseList();
//   }
// }

// onMounted(() => { 
//   window.addEventListener('scroll',scrollBottom)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll',scrollBottom)
// })

/**
 * 尝试二：将函数封装到hooks中，提高代码复用性，
 * 需要传入滚动条到达底部时执行的回调函数
 * 代码简洁√，但回调函数相对不好管理，如果有多个回调会导致结构变复杂
 * 尝试采用变量
 */
// useScroll(homeStore.fetchHomeHouseList)

/**
 * 尝试三：监听变量，通过变量的值来判断滚动条的
 * 位置是否到达底部/对应位置
 */
/**
 * 改进四：监听函数中试用节流
 */
const {isReachBottom,scrollTop} = useScroll()

watch(isReachBottom,(newValue)=>{
  if(newValue){
    //等数据加载完毕后再重置变量,
    //网络请求默认返回promise
    homeStore.fetchHomeHouseList().then(()=>{
      isReachBottom.value = false;
    })
  }
})

//控制显示搜索框,当页面滑动到指定位置的时候显示搜索框,
//通过usescroll中返回的变量，可以得到实时的滚动位置
const isShowSearch = computed(()=>{
    return scrollTop.value>=450;
})

</script>

<style lang="less" scoped>
  .home{
    padding-bottom: 60px;
      .banner{
        img{
          width: 100%;
        }
      }

      
  }
</style>