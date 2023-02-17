<template>
  <div
    v-if="tourData"
    class="relative flex min-h-[400px] flex-col items-center justify-end bg-chd/80 lg:fixed lg:top-0 lg:bottom-0 lg:w-1/2 lg:justify-center"
  >
    <transition
      name="left_data"
      mode="out-in"
    >
      <div v-show="isTransition">
        <picture
          class="absolute inset-0 p-3 lg:static lg:flex lg:items-center lg:flex-col lg:justify-center lg:p-8"
        >
          <img
            loading="lazy"
            :src="
              urlFor(tourData.coverImg)
                .height(400)
                .auto('format')
                .quality(60)
                .url()
            "
            class="object-cover w-full h-full rounded-lg lg:hidden"
          />
          <div
            class="hidden h-[700px] w-[500px] rounded-lg bg-red-100 p-1 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-tr before:from-lime-400 before:to-fuchsia-400 before:blur-md lg:relative lg:flex"
          >
            <img
              loading="lazy"
              :src="
                urlFor(tourData.coverImg)
                  .height(700)
                  .width(500)
                  .auto('format')
                  .quality(60)
                  .url()
              "
              class="object-cover w-full h-full rounded-lg"
            />
          </div>
          <span
            class="lg:max-w-[600px] z-10 px-10 text-center pb-10 absolute bottom-0 w-full lg:pb-2"
          >
            <h1 class="text-xl font-bold">
              {{ tourData.tourName[Trans.currentLocale] }}
            </h1>
            <p class="pt-3 text-base">
              {{ tourData.tourDuration[Trans.currentLocale] }}
            </p>
          </span>
        </picture>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { watch, ref, onBeforeMount } from 'vue';

import { urlFor } from '@/sanityClient';
import { delayAction } from '@utils/delayAction';
import Trans from '@i18n/translation';

const delayTime = 500;

const props = defineProps(['data']);
const tourData = ref(null);
const isTransition = ref(false);

watch(
  () => props.data,
  () => {
    isTransition.value = false;

    delayAction(() => {
      isTransition.value = true;
      tourData.value = props.data;
    }, delayTime);
  }
);

onBeforeMount(() => {
  if (props.data) {
    delayAction(() => {
      isTransition.value = true;
      tourData.value = props.data;
    }, delayTime);
  }
});
</script>

<style>
.left_data-enter-active,
.left_data-leave-active {
  transition: all v-bind(`${delayTime/1000}s`) ease;
}

.left_data-enter-from,
.left_data-leave-to {
  opacity: 0;
}
</style>
