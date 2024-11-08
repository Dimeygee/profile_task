<script setup lang="ts">

import ContainerBox from '@/components/ContainerBox.vue'
import PlatformCard from '@/components/PlatformCard.vue';



const platforms = [
  {
    image: "/src/assets/binance.png",
    name: "Binance",
  },
  {
    image: "/src/assets/huobi.png",
    name: "Huobi",
  },
  {
    image: "/src/assets/bybit.png",
    name: "ByBit",
  }]

</script>

<template>
  <ContainerBox>
    <div class="homecontainer">
       <PlatformCard
        v-for="(platform, index) in platforms"
        :key="index"
        :image="platform.image"
        :name="platform.name"
      />
    </div>
  </ContainerBox>
</template>


<style>
  .homecontainer{
    display: flex;
    justify-content: space-between;
    padding-top: 179px;
  }

  .platform_card{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    flex-basis: 30%;
    flex-shrink: 0;
  }

  .platform_name{
    font-size: 23px;
    font-weight: 600;
    line-height: 29px;
    color: white;
  }

  .platform_content{
    font-size: 28px;
    font-weight: 700;
    line-height: 37px;
    color: white;
  }

  .platform_content.active{
    color:#63E2B7;
  }

  .platform_header{
    display: flex;
    gap: 25px;
    align-items: center;
  }

  .platform_header img{
    width: 92px;
    height:92px;
  }
</style>