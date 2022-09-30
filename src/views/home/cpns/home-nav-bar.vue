<template>
    <div class="nav-bar">
        <span class="title">MoMoTrip</span>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
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
</style>