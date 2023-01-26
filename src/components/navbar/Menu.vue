<script setup>
import UnderlineLink from '@navbar/UnderlineLink.vue';

defineProps(['isBurgerMenu']);

const menuItems = [
  {
    name: `HOME`,
    link: '/',
  },
  {
    name: `DAILY TOURS`,
    link: '/daily',
  },
  {
    name: `CENTRAL TOURS`,
    link: '/central',
  },
];

const langSelections = ['vn', 'en', 'fr'];
</script>

<template>
  <menu
    :class="!isBurgerMenu && '-translate-x-[150%]'"
    class="fixed inset-0 z-10 flex flex-col items-center justify-center gap-5 font-bold transition-all duration-700 bg-white font-Poppins lg:static lg:flex lg:translate-x-0 lg:flex-row lg:bg-transparent">
    <div
      v-for="item in menuItems"
      :key="item"
      class="px-2 text-4xl sm:text-6xl lg:text-xl">
      <a
        class="relative z-0 uppercase before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-2 before:w-0 before:-translate-x-1/2 before:bg-pink-400 before:transition-all before:duration-300 before:ease-linear before:hover:w-[110%] lg:before:translate-y-3 lg:before:bg-orange-400 lg:before:duration-200 cursor-pointer"
        @click="handleLinkClick(item.link)">
        {{ item.name }}
      </a>
    </div>

    <div class="absolute bottom-0 w-full p-4 lg:hidden">
      <div class="flex items-end justify-between sm:text-2xl">
        <div class="flex gap-4">
          <button
            v-for="lang in langSelections"
            :key="lang"
            class="uppercase text-chd"
            @click="handleChangeLanguage">
            {{ lang }}
          </button>
        </div>

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
