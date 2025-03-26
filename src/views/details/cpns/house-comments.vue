<template>
    <div class="comments">
      <detail-section title="热门评论" :moreInfos="moreText">
          <div class="scores">
              <div class="score">
                  <div class="scoreText">
                    {{detailsStore.dynamicModule?.commentModule?.overall}}
                  </div>
              </div>
              <div class="scoreSummary">
                  <div class="title">{{detailsStore.dynamicModule?.commentModule?.scoreTitle}}</div>
                  <div class="count">{{detailsStore.dynamicModule?.commentModule?.totalCount}}条评论</div>
                  <van-rate :model-value="score" size="12px" color="rgb(244,153,48)" readonly allow-half />
              </div>
              <div class="scoreTags">
                  <template v-for="(item,index) in detailsStore.dynamicModule?.commentModule?.subScores" :key="index">
                      <span class="tagText">
                          {{item}}
                      </span>
                  </template>
              </div>
          </div>
          <div class="commentTags">
              <template v-for="(item,index) in detailsStore.dynamicModule?.commentModule?.commentTagVo">
                  <div class="commentTag" :style="{color:item.color,background:item.backgroundColor}">
                      {{item.text}}
                  </div>
              </template>
          </div>
          <div class="commentInfo">
              <div class="user">
                  <div class="headPic">
                      <img :src="detailsStore.dynamicModule?.commentModule?.comment?.userAvatars" alt="">
                  </div>
                  <div class="nameTime">
                      <div class="username">{{detailsStore.dynamicModule?.commentModule?.comment?.userName}}</div>
                      <div class="date">{{detailsStore.dynamicModule?.commentModule?.comment?.checkInDate}}</div>
                  </div>
              </div>
              <div class="commentText">
                  {{detailsStore.dynamicModule?.commentModule?.comment?.commentDetail}}
              </div>
          </div>
      </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/datail-section/detail-section.vue';
import useDetailsStore from '@/stores/modules/details';

const detailsStore = useDetailsStore();
const moreText = `查看全部${detailsStore.dynamicModule?.commentModule?.totalCount}条评论`
const score = detailsStore.dynamicModule?.commentModule?.overall;

</script>

<style lang="less" scoped>
    .comments{
        .scores{
            display: flex;
            justify-content: space-between;
            .scoreSummary{
                font-size: 12px;
                margin-top: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .count{
                    margin:5px 0;
                    color: gray;
                }
            }
            .scoreTags{
                width: 45%;
                color:gray;
                display: grid;
                grid-template-columns:1fr 1fr;
                margin-top: 10px;
                .tagText{
                    font-size: 12px;
                    padding-right: 4px;
                    padding-bottom: 8px;  
                    font-weight: 800;     
                }
            }
            .score{
                width: 20%;
                .scoreText{
                    padding-top: 10px;
                    display: flex;
                    justify-content: center;
                    font-size: 45px;
                    font-weight: 600;
                    border-bottom: 4px solid rgb(244,153,48);
                }
            }
        }
        .commentTags{
            margin-top: 20px;
            padding: 8px;
            .commentTag{
                display: inline-block;
                margin: 3px;
                padding: 3px;
                border-radius: 5px;
            }
        }
        .commentInfo{
            background-color: #f2f2f2;
            border-radius: 14px;
            margin-bottom: 15px;
            .user{
                padding-top: 15px;
                padding-left: 15px;
                display: flex;
                align-items: center;
                img{
                    margin-right: 10px;
                    width: 40px;
                    border-radius: 100%;
                }
                .nameTime{
                    display: flex;
                    flex-direction: column;
                    .username{
                        font-size: 18px;
                        font-weight: 500;
                        margin-bottom: 3px;
                    }
                    .date{
                        color: grey;
                    }
                }
                
            }
            .commentText{
                padding:20px 15px;
                line-height: 1.4;
                font-weight: 1100;
            }
        }
    }
</style>