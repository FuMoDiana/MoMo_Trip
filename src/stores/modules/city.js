import { defineStore } from 'pinia';
import { getAllCity } from '@/service'

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {}
    }),
    actions: {
        async fetchAllCitiesAction() {
            const res = await getAllCity()
            this.allCities = res.data
        }
    }
})

export default useCityStore