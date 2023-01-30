<script setup>
import UnderlineLink from '@navbar/UnderlineLink.vue';
import { RouterLink } from 'vue-router';
// import { onBeforeMount, watch } from 'vue';
// import i18next from 'i18next';
import { changeLanguage } from '@utils/changeLanguage';

// let lng = $ref(i18next.language);

// onBeforeMount(() => {
//   // before page created check the lang and set it
//   !i18next.language && (lng = localStorage.getItem('i18nextLng'));
// });

// watch(
//   () => i18next.language,
//   newVal => {
//     lng = newVal;
//   }
// );

const handleSelected = ({ target }) => {
  changeLanguage(target.value);
};
</script>

<template>
  <div
    class="relative z-0 justify-end text-2xl lg:flex-1 lg:flex lg:items-center lg:text-xl"
  >
    <select
      v-model="lng"
      class="hidden mr-3 uppercase lg:inline"
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
      :to="{
        name: `contact_${lng}`,
      }"
    >
      <UnderlineLink :name="$t('get_in_touch', { ns: 'navbar' })" />
    </RouterLink>
  </div>
</template>
