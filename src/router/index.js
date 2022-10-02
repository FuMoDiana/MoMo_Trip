import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    //映射关系：route -> component
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () =>
                import ("../views/home/home.vue")

        },
        {
            path: '/message',
            component: () =>
                import ("../views/message/message.vue")
        },
        {
            path: '/favor',
            component: () =>
                import ("../views/favor/favor.vue")
        },
        {
            path: '/order',
            component: () =>
                import ("../views/order/order.vue")
        },
        {
            path: '/city',
            component: () =>
                import ("../views/city/city.vue"),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/search',
            component: () =>
                import ("../views/search/search.vue"),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/details/:id',
            component: () =>
                import ("../views/details/details.vue"),
            meta: {
                hideTabBar: true
            }
        },
    ]
})

export default router