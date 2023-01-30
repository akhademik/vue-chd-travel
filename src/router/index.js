import { createRouter, createWebHistory, RouterView } from 'vue-router';
import Trans from '@i18n/translation';
import TestView from '@components/TestView.vue';
import HomeView from '@views/HomeView.vue';

const routes = [
  // home view
  {
    path: '/:locale?',
    component: RouterView,
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: TestView,
      },
      {
        path: '',
        name: 'about',
        component: HomeView,
      },
    ],
  },
  // catch all and redirect back to home
  // { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
