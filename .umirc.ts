import {
  defineConfig
} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    // dark: true,
    compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  lessLoader: {
    javascriptEnabled: true,
},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', redirect: '/home' },
        // { path: '/user', redirect: '/user/login' },
        // { path: '/user/login', component: './user/login' },
        { path: '/home', component: './home' },
        { path: '/youhuitongji', component: './home' }
      ],
    },
  ],

});
