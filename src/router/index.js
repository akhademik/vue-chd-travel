import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:contact',
      name: 'contact',
      component: () => import('@views/ContactView.vue'),
    },
    // {
    //   path: '/:slug1',
    //   name: 'contact',
    //   component: () => import('@views/ContactView.vue'),
    // },
    // {
    //   path: '/:sluglvl1',
    //   name: 'sluglvl1redirect',
    //   component: () => import('@views/_SlugLvl1Redirect.vue'),
    // },
  ],
});

export default router;
