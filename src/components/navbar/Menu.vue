<script setup>
import UnderlineLink from '@navbar/UnderlineLink.vue';
import { RouterLink } from 'vue-router';
import LanguageSwitcher from '@components/LanguageSwitcher.vue';

defineProps(['isBurgerMenu']);

const menuItems = [
  {
    name: 'navBar.home',
    link: 'home',
  },
  {
    name: 'navBar.daily_tours',
    link: 'home',
  },
  {
    name: 'navBar.central_tours',
    link: 'home',
  },
];
</script>

<template>
  <menu
    :class="!isBurgerMenu && '-translate-x-[150%]'"
    class="fixed inset-0 z-10 flex flex-col items-center justify-center gap-5 font-bold transition-all duration-700 bg-white font-Poppins lg:static lg:flex lg:translate-x-0 lg:flex-row lg:bg-transparent"
  >
    <div
      v-for="item in menuItems"
      :key="item"
      class="px-2 text-4xl sm:text-6xl lg:text-xl"
    >
      <RouterLink
        class="relative z-0 uppercase before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-2 before:w-0 before:-translate-x-1/2 before:bg-pink-400 before:transition-all before:duration-300 before:ease-linear before:hover:w-[110%] lg:before:translate-y-3 lg:before:bg-orange-400 lg:before:duration-200 cursor-pointer"
        :to="
          item.link === 'home'
            ? { name: item.link }
            : { name: item.link, params: { menu: item.name } }
        "
      >
        {{ $t(item.name) }}
      </RouterLink>
    </div>

    <div class="absolute bottom-0 w-full p-4 lg:hidden">
      <div class="flex items-end justify-between sm:text-2xl">
        <LanguageSwitcher :scrSize="false" />

        <div className="flex flex-col text-right">
          <div>
            <UnderlineLink name="0971864864" />
          </div>
          <div>
            <UnderlineLink name="info@chdtravel.com" />
          </div>
        </div>
      </div>
    </div>
  </menu>
</template>
