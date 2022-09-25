<template>
    <div class="app">
      <router-view></router-view>
      <!-- 也可以选择css遮盖住tabbar -->
      <tab-bar></tab-bar>
    </div>
</template>

<script setup>
import TabBar from './components/tab-bar/TabBar.vue';
import {useRoute} from 'vue-router'

const route = useRoute()
</script>

<style scoped>
    
</style>