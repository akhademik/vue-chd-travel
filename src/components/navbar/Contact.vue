<script setup>
import UnderlineLink from '@navbar/UnderlineLink.vue';
import { RouterLink } from 'vue-router';

import i18next from 'i18next';
import { slugify } from '@utils/slugify';
// const route = useRoute();

const emit = defineEmits(['langSelected']);

const handleSelected = ({ target }) => {
  emit('langSelected', target.value);
};
</script>

<template>
  <div
    class="relative z-0 justify-end text-2xl lg:flex-1 lg:flex lg:items-center lg:text-xl"
  >
    <select
      class="hidden mr-3 lg:inline uppercase"
      :value="i18next.language"
      @change="handleSelected"
    >
      <option
        v-for="lang in ['vn', 'en', 'fr']"
        :key="lang"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
    <RouterLink
      class="bg-red-400 cursor-pointer check"
      :to="{
        name: 'contact',
        params: { contact: slugify($t('get_in_touch', { ns: 'navbar' })) },
      }"
    >
      <UnderlineLink :name="$t('get_in_touch', { ns: 'navbar' })" />
    </RouterLink>
  </div>
</template>
