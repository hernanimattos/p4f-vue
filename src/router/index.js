import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';

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
  },
  {
    path: '*',
    name: 'Not found',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
