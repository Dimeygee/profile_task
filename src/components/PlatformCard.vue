<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="platform_card">
    <div class="platform_header">
      <div class="platform_image" :style="{ backgroundImage: `url(${props.image})` }"></div>
      <p class="platform_name">{{ props.name }}</p>
    </div>
    <p class="platform_content">
      Поиск прибыльных p2p объявлений <span class="active">обмена</span>
    </p>
  </div>
</template>

<style scoped>
.platform_card {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.platform_name {
  font-size: 23px;
  font-weight: 600;
  line-height: 29px;
  color: white;
}

.platform_content {
  font-size: 28px;
  font-weight: 700;
  line-height: 37px;
  color: white;
}

.platform_content .active {
  color: #63e2b7;
  font-weight: 700;
}

.platform_header {
  display: flex;
  gap: 25px;
  width: 100%;
  padding-left: 100px;
}

.platform_image {
  width: 92px;
  height: 92px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
}
</style>
