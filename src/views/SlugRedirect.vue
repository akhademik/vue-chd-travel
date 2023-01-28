<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useTranslation } from 'i18next-vue';

const route = useRoute();
const { slug } = route.params;
// const redirectLinks = [
//   { name: 'links_items.home', link: '/' },
//   { name: 'links_items.daily_tours', link: '/daily' },
//   { name: 'links_items.central_tours', link: '/central' },
//   { name: 'get_in_touch', link: '/contact' },
// ];
</script>

<template>
  <div>
    <h1>slug redirect</h1>

    <p>{{ slug }}</p>
  </div>
</template>
