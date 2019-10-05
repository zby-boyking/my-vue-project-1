import Vue from 'vue';
//导入路由模块的包
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);

//导入vue-resource
import VueResource from 'vue-resource';
//安装vue-resource
Vue.component(VueResource);

import app from './App.vue';

//导入我们自己的路由模块
import router from './router.js';

import { Header , Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
//按需导入轮播图组件
Vue.component(Swipe.name , Swipe);
Vue.component(SwipeItem.name , SwipeItem);

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router //把路由挂载到我们的VM实例中
});