<template>
    <div class="facility">
        <detail-section title="房屋设施" moreInfos="查看更多设施">
            <div class="facilities">
                <template v-for="(item,index) in detailsStore.facilityShow" :key="index">
                    <div class="bigType">
                        <div class="title">
                            <img :src="item.icon" alt="">
                            <div class="text">{{item.groupName}}</div>
                        </div>
                        <div class="tags">
                            <template v-for="(iten,indey) in item.facilitys.slice(0,4)" :key="iten">
                                <div class="tag">
                                    <div class="text">
                                        <van-icon name="passed" color="green"/>
                                        {{iten.name}}
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/datail-section/detail-section.vue';
import useDetailsStore from '@/stores/modules/details';

const detailsStore = useDetailsStore();

</script>

<style lang="less" scoped>
    .facilities{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        border-radius: 12px;
        .bigType{
            height: 100px;
            display: flex;
            justify-content: space-around;
            .title{
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                img{
                    width: 30px;
                    height: 30px;
                }
            }
            .tags{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 50%;
                .tag{
                    width: 50%;
                }
            }
        }
    }
</style>