<template>
    <div class="location border-bottom">
        <div class="city" @click="cityClick">{{cityStore.currentCity.cityName}}</div>
        <div class="position" @click="positionClick">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
    </div>
<!-- 日期 -->
    <div class="dateChoose border-bottom" @click="showClander=true">
      <div class="stayTime">
        <div class="start item">
          <div class="tip">入住</div>
          <div class="date">{{startTime}}</div>
        </div>
        <div class="stay item">
          <div class="tip">共{{stayCount}}晚</div>
          <div class="date fromTo">~</div>
        </div>
        <div class="end item">
          <div class="tip">离开</div>
          <div class="date">{{endTime}}</div>
        </div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showClander" 
      type="range" 
      @confirm="onConfirm" 
      color="rgb(254,150,1)"
      />
      <div class="tags">
        <!-- 价格 -->
        <div class="price">价格不限</div>
        <!-- 人数 -->
        <div class="line">|</div>
        <div class="people">人数不限</div>
      </div>
      <div class="message border-bottom">
          <div class="info">关键字/位置/民宿名</div>
      </div>
      <div class="hotSuggests">
        <template v-for="(item,index) in hotSuggests" :key="index">
          <div class="item">
            {{item.tagText.text}}
          </div>
        </template>
      </div>



</template>

<script setup>
import {ref} from 'vue';
import {storeToRefs} from 'pinia';
import {useRouter} from 'vue-router';
import useCityStore from '@/stores/modules/city';
import {formatDate,diffDate} from '@/utils/formatDate';
import useHomeStore from '@/stores/modules/home';

//位置/城市

const router = useRouter()
const cityStore = useCityStore();

const cityClick = ()=>{
  router.push('/city')
}

const positionClick = ()=>{
  //获取地理位置的api
  navigator.geolocation.getCurrentPosition(res=>{
    console.log("获取位置成功",res)
  },err=>{
    console.log("获取位置失败",err)
  })
}

//日期格式，范围
//日期范围处理
const nowDate = new Date();
const nextDate = new Date();
nextDate.setDate(nowDate.getDate()+1);

const startTime = ref(formatDate(nowDate));
const endTime = ref(formatDate(nextDate))
//日期计算
const stayCount = ref(diffDate(nextDate,nowDate))

//日历弹出
const showClander = ref(false)
//确认提交
const onConfirm = (dates)=>{
  const selectStart = dates[0]
  const selectEnd = dates[1]
   startTime.value = formatDate(selectStart);
   endTime.value = formatDate(selectEnd);
   stayCount.value = diffDate(selectEnd,selectStart)
   showClander.value = false;
}




//热门建议
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData();
const {hotSuggests} = storeToRefs(homeStore)


</script>

<style lang="less" scoped>
    .location{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 17px;

        .position{
          .text{
            font-size: 13px;
            color: #666;
          }
        }
        .city{
          width: 74px;
        }
        
        img{
          height: 17px;
        }
      }

      .dateChoose{
        .stayTime{
        display: flex;
        justify-content: space-between;
        padding: 5px 15px;

        .item{
          text-align: center;
        }
        .tip{
          font-size: 10px;
          color: darkgrey;
          padding-bottom: 5px;
        }
        .date{
          font-size: 18px;
        }
        .stay{
          font-size: 14px;
          color: gray;
          .fromTo{
            font-size: 50px;
            line-height: 20px;
            color: var(--primary-color);
          }
        }
      }
    }

    .tags{
      display: flex;
      color: gray;
      justify-content: space-between;
      padding:15px;
      font-size: 15px;
    }

    .message{
      display: flex;
      padding: 15px;
      font-size: 15px;
      color: gray;
    }

</style>