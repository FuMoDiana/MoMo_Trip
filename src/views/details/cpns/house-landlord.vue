<template>
    <div class="landlord">
      <detail-section title="房东介绍" moreInfos="查看房东主页">
          <div class="contentInfos">
            <div class="titlePic">
                <img :src="detailsStore.dynamicModule?.landlordModule?.topScroll" alt="">
            </div>
            <div class="landlordName">
                <div class="namePic">
                    <img :src="detailsStore.dynamicModule?.landlordModule?.hotelLogo" alt="">
                </div>
                <div class="landlordText">
                    <span class="hotelName">{{detailsStore.dynamicModule?.landlordModule?.hotelName}}</span>
                    <div class="tags">
                        <template v-for="(item,index) in detailsStore.dynamicModule?.landlordModule?.hotelTags">
                            <span class="tag" 
                                :class="{borderLeft:index !== detailsStore.dynamicModule?.landlordModule?.hotelTags?.length-1}" 
                                :style="{color:item.tagText.color}"
                            >
                                {{item.tagText.text}}
                            </span>
                        </template>
                    </div>
                </div>
            </div>
            <div class="summarys">
                <template v-for="(item,index) in detailsStore.dynamicModule?.landlordModule?.hotelSummary" :key="index">
                    <div class="summary">
                        <div class="summaryName">{{item.title}}</div>
                        <div class="percent">{{item.introduction}}</div>
                        <div class="count">{{item.tip}}</div>
                    </div>
                </template>
            </div>
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
    .landlord{
        .contentInfos{
            .titlePic{
                img{
                    width: 100%;
                    border-radius: 4px;
                }
            }
            .landlordName{
                display: flex;
                .namePic{
                    img{
                        margin-top: 10px;
                        width: 65px;
                    }
                }
                .landlordText{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .hotelName{
                        font-weight: 900;
                        font-size: 20px;
                        padding: 4px 8px;
                    }
                    .tags{
                            margin-top: 5px;
                        .tag{
                            padding:0 8px;
                            font-size: 15px;
                        }
                        .borderLeft{
                            border-right:1px solid #9b9b9b;
                        }
                    }
                }
            }

            .summarys{
                margin-top: 50px;
                display: flex;
                justify-content: space-around;
                margin-bottom: 10px;
                .summary{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .count{
                        color: gray;
                    }
                    .summaryName{
                        color: #9B9B9B;
                    }
                    .percent{
                        padding: 10px 0;
                        font-size: 20px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
</style>