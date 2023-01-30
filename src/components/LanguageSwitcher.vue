<script setup>
import Trans from '@i18n/translation';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const navMobile = $ref(true);
const navScreen = $ref(true);

const supportedLocales = Trans.supportedLocales;

const switchLanguage = async ({ target }) => {
  // .value for select , .textContent for button
  const newLocale = target.value || target.textContent;
  await Trans.switchLanguage(newLocale);
};
</script>

<template>
  <!-- big screen size -->
  <select
    v-show="navScreen"
    :class="'bg-red-200'"
    class="mr-3 text-2xl uppercase text-chd"
    @change="switchLanguage"
  >
    <option
      v-for="lang in supportedLocales"
      :key="`locale_${lang}`"
      :value="lang"
      :selected="locale === lang"
    >
      {{ lang }}
    </option>
  </select>

  <!-- mobile size -->
  <div
    v-show="navMobile"
    class="flex gap-4 text-chd"
  >
    <button
      v-for="lang in supportedLocales"
      :key="lang"
      class="uppercase"
      :class="locale === lang ? 'text-chd' : 'text-chd/30'"
      @click="switchLanguage"
    >
      {{ lang }}
    </button>
  </div>
</template>
