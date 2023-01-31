<script setup>
import { RouterLink } from 'vue-router';
import Trans from '@i18n/translation';
</script>

<template>
  <div>
    <h1 class="p-10 text-4xl text-red-600 uppercase">TESTING PHASE</h1>
    <h1 class="p-10 text-4xl text-red-600 uppercase">
      {{ $t('title', { name: 'Ha Tra1n' }) }}
    </h1>
    <RouterLink :to="Trans.i18nRoute({ name: 'home' })">To Home</RouterLink>
    <RouterLink :to="Trans.i18nRoute({ name: 'about' })">To About</RouterLink>
  </div>
</template>
