import Vue from 'vue';
import Router from 'vue-router';

// 引用頁面的 Component
import home from './components/Home.vue';
import category from './components/Category.vue';

// 使用 Vue Router
Vue.use(Router);

// Route 設定
export const routes = [
    { path: '/home', component: home, name:'home'},
    { path: '/category', component: category, name: 'category'},
    { path: '*', redirect: '/home' },
];

// 建立 Vue Router instance
const router = new Router({
    mode: 'history',
    routes
});

export default router;
