<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <h1 class="p-10 text-4xl text-red-600 uppercase">TESTING PHASE</h1>
    <h1 class="p-10 text-4xl text-red-600 uppercase">
      {{ $t('title', { name: 'Ha Tra1n' }) }}
    </h1>
    <RouterLink :to="{ name: 'home', params: { locale: 'en' } }">
      To Home
    </RouterLink>
    <RouterLink :to="{ name: 'about', params: { locale: 'en' } }">
      To About
    </RouterLink>
  </div>
</template>
