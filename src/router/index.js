import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue'; // import { slugify } from '@utils/slugify';

const routes = [
  // home view
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // catch all and redirect back to home
  { path: '/:pathMatch(.*)*', redirect: '/' },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@views/MenuRedirect.vue'),
  },
  // contact view
  {
    path: '/contact',
    name: 'contact_en',
    component: () => import('@views/ContactView.vue'),
  },
  {
    path: '/lien-he',
    name: 'contact_vn',
    component: () => import('@views/ContactView.vue'),
  },
  {
    path: '/contactez',
    name: 'contact_fr',
    component: () => import('@views/ContactView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
