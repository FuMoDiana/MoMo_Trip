import { defineStore } from 'pinia'
import { getHomeHotSuggests } from '@/service'

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categroies: []
    }),
    actions: {
        async fetchHotSuggestsData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        }
    }
})

export default useHomeStore