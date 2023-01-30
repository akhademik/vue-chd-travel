<script setup>
import UnderlineLink from '@navbar/UnderlineLink.vue';
import { RouterLink } from 'vue-router';
import LanguageSwitcher from '@components/LanguageSwitcher.vue';
</script>

<template>
  <div
    class="relative z-0 justify-end text-2xl lg:flex-1 lg:flex lg:items-center lg:text-xl"
  >
    <LanguageSwitcher :scrSize="true" />
    <RouterLink
      :to="{
        name: `home`,
      }"
    >
      <UnderlineLink :name="$t('navBar.get_in_touch', { ns: 'navbar' })" />
    </RouterLink>
  </div>
</template>
