import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      comonent: 'PostsContainers'
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Home,
    meta: {
      comonent: 'PostsContainers'
    }
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: Home,
    meta: {
      component: 'FotosContainer'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
