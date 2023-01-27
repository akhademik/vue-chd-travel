<script setup>
import HomeHeading from '@homeview/HomeHeading.vue';
import HomeIntro from '@homeview/HomeIntro.vue';
import TourSlides from '@components/TourSlides.vue';

// import { useTranslation } from 'i18next-vue';
// const { t } = useTranslation(['tours']);

const heading = 'LEADING TRAVEL SPECIALISTS FOR CENTRAL HIGHLANDS OF VIETNAM';
const intro =
  'We strive to provide our customers with the very best service in the tourism industry today. We are committed to offering travel services of the highest quality, combining our energy and enthusiasm, with our years of experience. Our greatest satisfaction comes in serving large numbers of satisfied clients who have experienced the joys and inspiration of travel.';
</script>

<template>
  <main class="mx-auto max-w-[90%] px-4 pt-4 font-Roboto text-chd">
    <!-- <h1>{{ t('tour_intro', 'tours') }}</h1> -->
    <h1>{{ $t('tours.daily') }}</h1>

    <HomeHeading :heading="heading" />
    <HomeIntro :intro="intro" />
    <div class="text-center">
      <h1 class="text-4xl font-extrabold md:text-5xl">Our Hot Tours !</h1>
      <span class="text-base">Client enjoys these tour the most</span>
    </div>
    <TourSlides />
    <p class="mb-10 text-center font-base sm:text-2xl">
      None of those meet your need ? Call us to tailor made for you !
    </p>
  </main>
</template>
