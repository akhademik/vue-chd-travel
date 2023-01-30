<template>
  <div>
    <h1 class="text-4xl font-bold text-center uppercase">Contact View</h1>
    <h1 class="mt-4 text-3xl font-bold text-center text-blue-600 uppercase">
      {{ $t('get_in_touch', { ns: 'navbar' }) }}
    </h1>
  </div>
</template>

<script setup>
import { onBeforeMount, watch } from 'vue';
// import i18next from 'i18next';

import { useRouter } from 'vue-router';
import { changeLanguage } from '@utils/changeLanguage';

const router = useRouter();
// current language of the URL get at Load
// let curUrl = $ref(null);

onBeforeMount(() => {
  const lng = router.currentRoute.value.name.split('_')[1];
  changeLanguage(lng);
  // curUrl = lng;
  // console.log(router);
  // console.log(curUrl);
});

let currentValue = localStorage.getItem('i18nextLng');
watch(
  () => localStorage.getItem('i18nextLng'),
  newValue => {
    if (currentValue !== newValue) {
      console.log('localstorage change');
      currentValue = newValue;
    }
  },
  { immediate: true }
);

// const checkURL = () => {
//   const newUrl = router.currentRoute.value.name.split('_')[1];
//   if (curUrl === newUrl) {
//     console.log('URL is equal');
//     console.log('1 cur :', curUrl);
//     console.log('1 new :', newUrl);
//   } else {
//     console.log('URL is different');
//     console.log('2 cur :', curUrl);
//     console.log('2 new :', newUrl);
//   }
// };
</script>
