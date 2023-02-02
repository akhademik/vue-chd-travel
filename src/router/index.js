import { createRouter, createWebHistory, RouterView } from 'vue-router';
import Trans from '@i18n/translation';
// import TestView from '@components/TestView.vue';
import HomeView from '@views/HomeView.vue';
import ContactView from '@views/ContactView.vue';
import ToursView from '@views/ToursView.vue';

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
        component: HomeView,
      },
      {
        path: 'daily-tours',
        name: 'daily',
        component: ToursView,
      },
      {
        path: 'central-tours',
        name: 'central',
        component: ToursView,
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  linkExactActiveClass: 'before:w-[109%]',
});

export default router;
