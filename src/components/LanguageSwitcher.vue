<script setup>
import Trans from '@i18n/translation';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const router = useRouter();

const { locale } = useI18n();

const props = defineProps(['scrSize']);
// props.scrSize

const supportedLocales = Trans.supportedLocales;

const switchLanguage = async ({ target }) => {
  // .value for select , .textContent for button
  const newLocale = target.value || target.textContent;
  await Trans.switchLanguage(newLocale);

  try {
    await router.replace({ params: { locale: newLocale } });
  } catch (e) {
    console.error(e);
    router.push('/');
  }
};
</script>

<template>
  <!-- big screen size -->
  <select
    v-if="scrSize"
    class="hidden mr-3 uppercase lg:inline text-chd top-20"
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
    v-if="!scrSize"
    class="flex gap-4 text-chd lg:hidden"
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
