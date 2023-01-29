<script setup>
import { useRoute, useRouter } from 'vue-router';
import { watchEffect, onBeforeMount } from 'vue';

const route = useRoute();
const router = useRouter();
let redirectTo = $ref(route.params.menu);

watchEffect(async () => {
  redirectTo = route.params.menu;
});

onBeforeMount(() => {
  console.log('before mounted');
  // console.log('router ', router);
  console.log('router ', router.currentRoute);
});
</script>

<template>
  <div>
    <h1>MENU REDIRECT</h1>

    <p>{{ redirectTo }}</p>
  </div>
</template>
