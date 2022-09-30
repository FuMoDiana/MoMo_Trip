import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

//每滚动一像素就会触发一次监听事件
//通过节流控制浏览器请求，降低开销
export default function useScroll() {
    const isReachBottom = ref(false);
    const scrollTop = ref(0);
    const scrollHeight = ref(0);
    const clientHeight = ref(0);

    const scrollBottom = throttle(() => {
        console.log("监听")
        scrollTop.value = document.documentElement.scrollTop;
        scrollHeight.value = document.documentElement.scrollHeight;
        clientHeight.value = document.documentElement.clientHeight;
        if (scrollTop.value + clientHeight.value + 1 >= scrollHeight.value) {
            //到达底部后要回调的函数(尝试2)
            // if (scrollBottomCB) scrollBottomCB();
            isReachBottom.value = true
        }
    }, 100)
    onMounted(() => {
        window.addEventListener('scroll', scrollBottom)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollBottom)
    })

    return { isReachBottom, scrollTop }
}