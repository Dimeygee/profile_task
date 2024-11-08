<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { onMounted } from 'vue'

import Container from './ContainerBox.vue'

const router = useRouter()
const userStore = useUserStore()


onMounted(async () => {
  await userStore.fetchUserData()
})



function goHome() {
  router.push('/')
}

function goToProfile() {
  router.push('/profile')
}
</script>

<template>
  <header class="header">
    <Container>
      <div class="header_inner">
        <img src="../assets/logo.png" @click="goHome" alt="Logo" class="logo" />
        <button class="profile-button" @click="goToProfile">  {{ userStore.fullName }}</button>
      </div>
    </Container>
  </header>
</template>

<style scoped>
.header {
  background-color: #63e2b7;
}

.header_inner {
  height: 142px;
  padding-top: 39px;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

img {
  width: 81px;
  height: 80px;
}

.profile-button {
  padding: 0 19px;
  height: 63px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  min-width: 290px;
  background-color: white;
}
</style>
