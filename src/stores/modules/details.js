import { defineStore } from 'pinia';
import { getCityInfos } from '@/service'

const useDetailsStore = defineStore("details", {
    state: () => ({
        houseId: 0,
        cityInfos: {},
        mainPart: {},
        swiperPics: {},
        swiperData: {},
    }),
    actions: {
        async fetchCityInfos(houseId) {
            this.houseId = houseId;
            const res = await getCityInfos(houseId)
            this.cityInfos = res.data;
            this.mainPart = res.data.mainPart;
            this.swiperPics = res.data.mainPart.topModule.housePicture.housePics;

            for (let item of this.swiperPics) {
                let valueArray = this.swiperData[item.enumPictureCategory];
                if (!valueArray) {
                    valueArray = [];
                    this.swiperData[item.enumPictureCategory] = valueArray;
                }
                valueArray.push(item)
            }
        },
    }
})

export default useDetailsStore