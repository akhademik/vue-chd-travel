<template>
  <div>
    <h1 class="p-10 text-4xl text-red-600 uppercase">TESTING PHASE</h1>
    <h1 class="p-10 text-4xl text-red-600 uppercase">
      {{ $t('title', { name: 'Ha Tra1n' }) }}
    </h1>
    <button
      @click="
        () => {
          locale === 'vn' ? (locale = 'en') : (locale = 'vn');
        }
      "
    >
      Toggle
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>
