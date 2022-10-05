<template>
    <div class="detailSection">
      <div class="title">
          <h2>{{title}}</h2>
      </div>
      <div class="content">
          <slot>
              <h2>我是默认内容</h2>
          </slot>
      </div>
      <div class="more" v-if="moreInfos">
          <span class="text">{{moreInfos}}</span>
          <van-icon name="arrow" />
      </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";


defineProps({
    title:{
        type:String,
        default:'默认标题'
    },
    moreInfos:{
        type:String,
    }
})
</script>

<style lang="less" scoped>
    .detailSection{
        border-top: 8px solid #f3f3f3;
        display: flex;
        flex-direction: column;
        .title{
            padding: 5px;
            margin-top: 10px;
            padding-bottom: 15px;
            margin-left: 5px;
            border-bottom: 2px solid #f3f3f3;
        }
        .content{
            margin: 10px;
        }
        .more{
            display: flex;
            align-self: flex-end;
            padding: 5px;
            line-height: 1.1;
            color: var(--primary-color);
        }
    }
</style>