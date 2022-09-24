<template>
    <div class="home">
      <div class="nav-bar">
        <span class="title">MoMo❤Trip</span>
      </div>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <div class="location">
        <div class="city">广州</div>
        <div class="position">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .home{
    .nav-bar{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid gray;
        .title{
          font-size: 18px;
          font-weight: 700;
          color: var(--primary-color);
        }
      }

      .banner{
        img{
          width: 100%;
        }
      }

      .location{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;

        .city{
          width: 74px;
        }
        
        img{
          height: 17px;
        }
      }
  }
</style>