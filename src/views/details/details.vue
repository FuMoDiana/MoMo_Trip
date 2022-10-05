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
    <!-- 页面短评信息 -->
        <brief-infos />
    <!-- 房屋设施 -->
        <house-facility />
    <!-- 房东介绍 -->
        <house-landlord />
    <!-- 地图位置 -->
        <house-position />
    <!-- 热门评论 -->
        <house-comments />
    <!-- 预定须知 -->
        <house-rules />
    </div>
    
</template>

<script setup>
import {useRoute,useRouter} from 'vue-router';
import useDetailsStore from '@/stores/modules/details';
import detailSwiper from './cpns/detail-swiper.vue';
import briefInfos from './cpns/brief-infos.vue';
import houseFacility from './cpns/houseFacility.vue';
import houseLandlord from './cpns/house-landlord.vue';
import houseComments from './cpns/house-comments.vue';
import houseRules from './cpns/house-rules.vue';
import housePosition from './cpns/house-position.vue';

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
    .details::-webkit-scrollbar {
				display: none;
			}
</style>