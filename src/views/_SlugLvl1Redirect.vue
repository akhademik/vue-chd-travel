<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useTranslation } from 'i18next-vue';
const route = useRoute();
const router = useRouter();
const { t } = useTranslation();

const { sluglvl1: slug } = route.params;

const redirectLinks = [
  { name: 'links_items.home', link: '/' },
  { name: 'links_items.daily_tours', link: '/daily' },
  { name: 'links_items.central_tours', link: '/central' },
  { name: 'get_in_touch', link: '/contact' },
];

const handleRedirect = () => {
  redirectLinks.forEach(element => {
    const trans = t(element.name, { ns: 'navbar' })
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z]+|[']/g, '-')
      .toLowerCase();

    console.log(trans);
    if (trans === slug) {
      router.push({ path: '/', params: { sluglvl1: trans } });
      // console.log('the same');
    } else {
      // console.log('not the same');
    }
  });
};

handleRedirect();
</script>

<template>
  <div>
    <h1>slug redirect</h1>

    <p>{{ slug }}</p>
  </div>
</template>
