<template>
    <div class="rules">
      <detail-section title="预定须知">
          <div class="orderRules">
            <template v-for="(item,index) in detailsStore.dynamicModule?.rulesModule?.orderRules">
                <div class="rule" v-if="item.introduction">
                    <div class="name">
                        {{item.title}}
                    </div>
                    <div class="content">
                        {{item.introduction}}
                    </div>
                </div>
            </template>
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
    .orderRules{
        padding-top: 10px;
        display:flex;
        flex-direction: column;
        .rule{
            display: flex;
            .tip{
                margin-left: 25px;
                font-weight: 600;
            }
            .name{
                width: 20%;
                color: grey;
                font-weight: 500;
                padding-right: 10px;
                padding-bottom: 25px;
            }
        }
    }
</style>