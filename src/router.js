import { createRouter, createWebHistory } from 'vue-router'
import SignIn from './views/Signin.vue'
import SignUp from './views/Signup.vue'
import Home from './views/Home.vue'
import Prelogin from './views/Prelogin.vue'
import Recommend from './views/recom.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import Sell from '@/views/sell.vue'
import Consell from '@/views/consell.vue'


const routes = [
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'Prelogin',
        component: Prelogin
    },
    {
        path: '/recom',
        name: 'Recommend',
        component: Recommend
    },
    {
        path: '/product-detail/:id',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/sell',
        name: 'Sell',
        component: Sell
    },
    {
        path: '/consell',
        name: 'ConSell',
        component: Consell
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // ทำให้หน้าเริ่มต้นที่ด้านบน
        return { top: 0 };
    }
});

export default router;
