<template>
    <div class="city-list">
        <van-index-bar :index-list="indexList">
            <van-index-anchor index="1">热门</van-index-anchor>
                <div class="hotcity">
                    <template v-for="(item,index) in groupData.hotCities">
                        <div class="cityItem" @click="changeCity(item)">
                            {{item.cityName}}
                        </div>
                    </template>
                </div>
            <template v-for="(group,index) in groupData.cities" :key="index">
                <van-index-anchor :index="group.group" />
                    <template v-for="(city,indey) in group.cities" :key="indey">
                        <van-cell :title="city.cityName" @click="changeCity(city)" />
                    </template>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import useCityStore from '@/stores/modules/city'
import {useRouter, useLink} from 'vue-router'

//展示标签对应数据 
const props =defineProps({
    groupData:{
        type:Object,
        default:() => ({})
    }
})

//索引对应
const indexList = computed(()=>{
    const list= props.groupData.cities?.map(item => item.group);
    list?.unshift('#');
    return list
})

//选择城市
const cityStore = useCityStore()
const router = useRouter()
function changeCity(city){
    cityStore.changeCurrentCityAction(city);
    router.back()
}

</script>

<style lang="less" scoped>
    .city-list{
        .hotcity{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 10px;
            padding-right: 25px;
            .cityItem{
                width: 70px;
                height: 28px;
                font-size: 12px;
                text-align: center;
                background-color: #fff4ec;
                line-height: 28px;
                border-radius: 14px;
                margin: 5px 0;
            }
        }
    }
</style>