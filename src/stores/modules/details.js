import { defineStore } from 'pinia';
import { getCityInfos } from '@/service'

const useDetailsStore = defineStore("details", {
    state: () => ({
        houseId: 0,
        cityInfos: {},
        mainPart: {},
        swiperPics: {},
        swiperData: {},
        dynamicModule: {},
        facilityShow: []
    }),
    actions: {
        async fetchCityInfos(houseId) {
            this.houseId = houseId;
            const res = await getCityInfos(houseId)
            this.cityInfos = res.data;
            this.mainPart = res.data.mainPart;
            this.dynamicModule = this.mainPart.dynamicModule;
            this.swiperPics = res.data.mainPart.topModule.housePicture.housePics;

            for (let item of this.swiperPics) {
                let valueArray = this.swiperData[item.enumPictureCategory];
                if (!valueArray) {
                    valueArray = [];
                    this.swiperData[item.enumPictureCategory] = valueArray;
                }
                valueArray.push(item)
            }
            let j = 0;
            for (let i = 0; i < this.dynamicModule.facilityModule.houseFacility.houseFacilitys.length; i++) {
                if (i === this.dynamicModule.facilityModule.houseFacility.facilitySort[j]) {
                    this.facilityShow.push(this.dynamicModule.facilityModule.houseFacility.houseFacilitys[i]);
                    j++;
                }
            }
        },
    }
})

export default useDetailsStore