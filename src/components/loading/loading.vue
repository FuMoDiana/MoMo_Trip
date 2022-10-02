<template>
    <div class="loading">
        <div class="load">
            <van-loading type="spinner" color="rgb(255, 150, 69)" size="40px" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
    .loading{
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        display: flex;
        justify-content: center;
        align-items: center;

}
</style>