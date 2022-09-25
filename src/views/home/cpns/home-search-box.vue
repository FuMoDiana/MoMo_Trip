<template>
    <div class="location">
        <div class="city" @click="cityClick">广州</div>
        <div class="position" @click="positionClick">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

//位置/城市

const router = useRouter()

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
</style>