<template>
    <div class="swiper" v-if="detailsStore.mainPart">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in detailsStore.swiperPics" :key="image">
                <img :src="image.url" />
            </van-swipe-item>
            <template #indicator="{ active, total }">
                <div class="indicator">
                    <template v-for="(value,key,index) in detailsStore.swiperData" :key="key">
                        <div class="infos" :class="{active:detailsStore.swiperPics[active]?.enumPictureCategory == key}">
                            <span 
                              class="item" 
                            >
                              {{strFormat(value[0].title)}}
                            </span>
                            <span v-if="detailsStore.swiperPics[active]?.enumPictureCategory == key">
                                {{arrayIndex(detailsStore.swiperPics[active])}}/{{value.length}}
                            </span>
                        </div>
                    </template>
                </div>
            </template>              
        </van-swipe>
    </div>
</template>

<script setup>
import useDetailsStore from '@/stores/modules/details'

const detailsStore = useDetailsStore();

// detailsStore.fetchCityInfos(houseId)
// console.log(detailsStore.swiperData)

//格式转换
function strFormat(str){
    return str.replace('【','').replace('】','').replace('：','');
}

//查找当前轮播图片对应的类别以及所在类别中的索引
function arrayIndex(item){
    let valueArray = detailsStore.swiperData[item.enumPictureCategory];
    return valueArray.findIndex(data => data === item)+1;
}
</script>

<style lang="less" scoped>
    .swiper{

        img{
            width: 100%;
        }
        .indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 4px 5px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.25);
            color: #fff;
            border-radius: 3px;
            .active{
                background: #fff;
                color: black;
                padding: 0 3px;
                border-radius: 10px;
            }
            .infos{
                display: inline-block;
                margin: 0 2px;
            }
        }

    }
</style>