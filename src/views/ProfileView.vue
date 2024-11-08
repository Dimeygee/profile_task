<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
    <div class="profile_container">
      <div class="profile_inner_container">
        <img class="profile_avatar" src="/src/assets/profile-avatar.png" alt="profile-avatar" />
        <div class="profie_content_container">
          <div class='content_heading'></div>
          <div class='content_body'>
            <div class="contents">
              <span>Фамилия</span>
               <span>{{  userStore.profile?.first_name }}</span>
            </div>
            <div class="contents">
              <span>Имя</span>
               <span>{{  userStore.profile?.second_name }}</span>
            </div>
            <div class="contents">
              <span>Отчество</span>
               <span>{{  userStore.profile?.middle_name }}</span>
            </div>
            <div class="contents">
              <span>Номер телефона</span>
               <span>{{  userStore.profile?.phone }}</span>
            </div>
          </div>
          <button class="button" @click="goHome">На главную</button>
        </div>
      </div>
    </div>
</template>

<style>
  .profile_container{
    padding-top:111px;
  }
  .profile_inner_container{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:85px;
  }
  .profile_avatar{
    width:433px;
    height:418px;
    overflow: hidden;
  }

  .profie_content_container{
    display: flex;
    flex-direction: column;
    max-width: 600px
  }

  .content_heading{
    text-align: center;
    font-size:48px ;
  }

  .contents{
    display: flex;
    justify-content: space-between;
  }

  .contents span{
    text-align: left;
    display: flex;
    width:50%;
  }

  .contents span:nth-child(2){
    justify-content: flex-start;
    padding-left:60px ;
  }

  .content_body{
    margin-top:62px;
    margin-bottom: 139px;
    display: flex;
    flex-direction: column;
    color:white;
    font-size: 24px;
    padding:0 20px 0 60px;
  }

  .button{
    width:600px;
    border-radius: 50px;
    height: 50px;
    border:none;
    outline:none;
    background-color:#63E2B7;
    color:white;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
