<template>
    <div class="app">
      <loading v-show="mainStore.isLoading" />
      <router-view></router-view>
      <!-- 也可以选择css遮盖住tabbar -->
      <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    </div>
</template>

<script setup>
import TabBar from './components/tab-bar/TabBar.vue';
import {useRoute} from 'vue-router';
import loading from './components/loading/loading.vue';
import useMainStore from './stores/modules/main'

const route = useRoute()
const mainStore = useMainStore()

</script>

<style scoped>
    
</style>