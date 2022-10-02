<template>
    <div class="details">
    <!-- 导航栏 -->
        <div class="navbar">
            <van-nav-bar
                title="房屋详情"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>
    
    <!-- 轮播图 -->
        <detail-swiper />
    </div>
    
</template>

<script setup>
import {useRoute,useRouter} from 'vue-router';
import useDetailsStore from '@/stores/modules/details';
import detailSwiper from './cpns/detailSwiper.vue';

const route = useRoute()
const router = useRouter()
const detailsStore = useDetailsStore();
const houseId = route.params.id;

//网络请求
detailsStore.fetchCityInfos(houseId)


function onClickLeft(){
    router.push('/home')
}

</script>

<style lang="less" scoped>
    
</style>