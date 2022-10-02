<template>
    <div class="briefInfos">
      <div class="houseInfo">
          <h2>
          {{detailsStore.mainPart.topModule.houseName}}         
          </h2>
      </div>
      <div class="tags">
          <template v-for="tag in detailsStore.mainPart.topModule.houseTags" :key="tag.tagCode"> 
              <span 
                class="item" 
                v-if="tag.tagText"
                :style="{color:tag.tagText.color,border:tag.tagText.border,background:tag.tagText.background.color }"
              >
                {{tag.tagText?.text}}
              </span>
          </template>
      </div>
      <div class="comment section">
          <div class="left">
              <span class="score">{{detailsStore.mainPart.topModule.commentBrief.overall}}</span>
              <span class="title">{{detailsStore.mainPart.topModule.commentBrief.scoreTitle}}</span>
              <span class="brief">"{{detailsStore.mainPart.topModule.commentBrief.commentBrief}}"</span>
          </div>
          <div class="right">
              <span class="count">{{detailsStore.mainPart.topModule.commentBrief.totalCount}}条评论</span>
              <van-icon name="arrow" />
          </div>
      </div>
      <div class="position section">
          <span class="address">{{detailsStore.mainPart.topModule.nearByPosition.address}}</span>
          <div class="right">
              <span>地图-周边</span>
              <van-icon name="arrow" />
          </div>
      </div>
    </div>
</template>

<script setup>
import useDetailsStore from '@/stores/modules/details';

const detailsStore = useDetailsStore();

</script>

<style lang="less" scoped>
    .briefInfos{
        .houseInfo{
            margin: 15px 0;
        }
        .tags{
            margin:15px 0;
            margin-left: 8px;
            .item{
                margin-left:5px;
            }
        }
        .section{
            display: flex;
            background-color: #f2f2f2;
            border-radius: 10px;
            margin: 10px;
            margin-top: 15px;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            padding-left: 5px;
            .right{
                line-height: 2;
                color: var(--primary-color);
            }
        }
        
        .comment{
            .left{
                
                .score{
                    padding-right: 5px;
                    font-weight: 600;
                    font-size: 23px;
                }
                .title{
                    padding-right: 5px;
                    font-weight: 900;
                }
            }
            
        }
    }
</style>