<template>
    <div class="city">
      <h2>city</h2>
      <template v-for="item in 100">
          <ul>{{item}}</ul>
      </template>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
    .city{
        position: relative;
        z-index: 9;
        background-color: white;
    }
</style>