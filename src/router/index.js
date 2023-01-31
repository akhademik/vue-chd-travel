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
        path: 'tours',
        name: 'tours',
        component: ToursView,
        // beforeEnter: (to, from, next) => {
        //   // ...
        //   console.log('to ', to);
        //   console.log('from ', from);
        //   console.log('next ', next);
        // },
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
});

export default router;
