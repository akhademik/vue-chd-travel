<script setup>
import Trans from '@i18n/translation';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const emit = defineEmits(['menuClicked']);
const router = useRouter();
const { locale } = useI18n();

const props = defineProps(['scrSize']);
// props.scrSize

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
  emit('menuClicked'); //emit event click to close the menu each time change language
};
</script>

<template>
  <!-- big screen size -->
  <select
    v-show="scrSize"
    class="hidden mr-3 uppercase lg:inline text-chd top-20"
    @change="switchLanguage"
  >
    <option
      v-for="lang in Trans.supportedLocales"
      :key="`locale_${lang}`"
      :value="lang"
      :selected="locale === lang"
    >
      {{ lang }}
    </option>
  </select>

  <!-- mobile size -->
  <div
    v-show="!scrSize"
    class="flex gap-4 text-chd lg:hidden"
  >
    <button
      v-for="lang in Trans.supportedLocales"
      :key="lang"
      class="uppercase relative inline-block px-1 pb-1 z-20 font-Roboto before:absolute before:bottom-0 before:left-0 before:block before:h-[3px] before:w-full mt-1"
      :class="
        locale === lang
          ? 'text-chd before:bg-orange-400'
          : 'text-chd/30 hover:text-orange-400'
      "
      @click="switchLanguage"
    >
      {{ lang }}
    </button>
  </div>
</template>
