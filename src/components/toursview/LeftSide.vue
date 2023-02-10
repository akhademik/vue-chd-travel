<template>
  <div
    class="relative flex min-h-[400px] flex-col items-center justify-end bg-chd/80 lg:fixed lg:top-0 lg:bottom-0 lg:w-1/2 lg:justify-center"
  >
    <picture
      class="absolute inset-0 p-3 lg:static lg:flex lg:items-center lg:justify-center lg:p-8"
    >
      <img
        :src="urlFor(coverImg).height(400).auto('format').quality(60).url()"
        class="object-cover w-full h-full rounded-lg lg:hidden"
      />
      <div
        class="hidden h-[700px] w-[500px] rounded-lg bg-red-100 p-1 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-tr before:from-lime-400 before:to-fuchsia-400 before:blur-md lg:relative lg:flex"
      >
        <img
          loading="lazy"
          :src="
            urlFor(coverImg)
              .height(700)
              .width(500)
              .auto('format')
              .quality(60)
              .url()
          "
          class="object-cover w-full h-full rounded-lg"
        />
      </div>
    </picture>
    <span class="max-w-[500px] z-10 px-10 text-center pb-10">
      <h1 class="text-xl font-bold">{{ tourName[Trans.currentLocale] }}</h1>
      <p class="pt-3 text-base">{{ tourDuration[Trans.currentLocale] }}</p>
    </span>
  </div>
</template>

<script setup>
import { urlFor } from '@/sanityClient';
import Trans from '@i18n/translation';

const props = defineProps(['data']);
const { coverImg, tourName, tourDuration } = props.data;
</script>
