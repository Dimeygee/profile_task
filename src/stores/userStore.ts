import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE_URL = 'http://80.78.243.226/api/v1'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    profile: null as {
      first_name: string
      second_name: string
      middle_name: string
      phone: string
    } | null,
    userData: null,
  }),

  actions: {
    async fetchUserData() {
      try {
        const response = await axios.get(`${API_BASE_URL}/get-user-data/`)
        if (response.data.success) {
          this.profile = response.data.profile
        }
        console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      }
    },
  },

  getters: {
    fullName: (state) => {
      if (state.profile) {
        return `${state.profile.first_name} ${state.profile.second_name}`
      }
      return 'Guest'
    },
  },
})
