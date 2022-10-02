import { defineStore } from 'pinia'

const nowDate = new Date();
const nextDate = new Date();
nextDate.setDate(nowDate.getDate() + 1);

const useMainStore = defineStore("main", {
    state: () => ({
        nowDate: nowDate,
        nextDate: nextDate,
        isLoading: true
    }),

})

export default useMainStore