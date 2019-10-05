

import VueRouter from 'vue-router';

import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';

var router = new VueRouter({
  routes: [ //配置路由规则
    {path: '/home' , component: HomeContainer},
    {path: '/member' , component: MemberContainer},
    {path: '/shopcar' , component: ShopcarContainer},
    {path: '/search' , component: SearchContainer}
  ],
  linkActiveClass: 'mui-active' //点击高亮的样式
});

export default router;