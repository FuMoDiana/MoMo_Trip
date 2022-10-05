<template>
    <div class="positionMap">
      <detail-section title="位置周边" moreInfos="查看更多周边信息">
            <div class="baiduMap" ref="mapRef">
            </div> 
      </detail-section>
    </div>
</template>

<script setup>
import {onMounted,ref} from 'vue';
import detailSection from '@/components/datail-section/detail-section.vue';
import useDetailsStore from '@/stores/modules/details';

const detailsStore = useDetailsStore();
const longitude = detailsStore.dynamicModule.positionModule.longitude;
const latitude = detailsStore.dynamicModule.positionModule.latitude;

const mapRef = ref();

onMounted(() => {
    let map = new BMapGL.Map(mapRef.value);//创建地图实例
    let point = new BMapGL.Point(longitude,latitude);//建立点坐标
    map.centerAndZoom(point, 15); //初始化地图，设置中心点坐标和地图级别
    let marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
})
</script>

<style lang="less" scoped>

    .baiduMap{
        height: 300px;
        width: 100%;
    }
</style>