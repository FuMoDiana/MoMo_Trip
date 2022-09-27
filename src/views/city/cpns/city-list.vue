<template>
    <div class="city-list">
        <van-index-bar>
            <template v-for="(group,index) in groupData.cities" :key="index">
                <van-index-anchor :index="group.group" />
                    <template v-for="(city,indey) in group.cities" :key="indey">
                        <van-cell :title="city.cityName" />
                    </template>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    groupData:{
        type:Object,
        default:() => ({})
    }
})

</script>

<style lang="less" scoped>
    
</style>