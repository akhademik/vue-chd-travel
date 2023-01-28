<script setup>
import HomeHeading from '@homeview/HomeHeading.vue';
import HomeIntro from '@homeview/HomeIntro.vue';
import TourSlides from '@components/TourSlides.vue';
</script>

<template>
  <main class="mx-auto max-w-[90%] px-4 pt-4 font-Roboto text-chd">
    <HomeHeading :heading="$t('header')" />
    <HomeIntro :intro="$t('intro')" />
    <div class="text-center">
      <h1 class="text-4xl font-extrabold md:text-5xl">{{ $t('hot') }}</h1>
      <span class="text-base">{{ $t('client_enjoy') }}</span>
    </div>
    <TourSlides />
    <p class="mb-10 text-center font-base sm:text-2xl">
      {{ $t('none_chosen') }}
    </p>
  </main>
</template>
