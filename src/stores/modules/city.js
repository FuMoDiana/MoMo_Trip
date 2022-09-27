import { defineStore } from 'pinia';
import { getAllCity } from '@/service'

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {},
        currentCity: {
            cityName: "成都"
        }
    }),
    actions: {
        async fetchAllCitiesAction() {
            const res = await getAllCity()
            this.allCities = res.data
        },
        changeCurrentCityAction(city) {
            this.currentCity.cityName = city.cityName;
        }
    }
})

export default useCityStore