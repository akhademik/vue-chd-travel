<script setup>
import { ref, onBeforeMount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper';
import Loading from '@components/Loading.vue';
import { urlFor } from '@/sanityClient';
import { fetchData } from '@utils/fetchData';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const currentSlide = ref(1);
const sliderStyle = 'h-[400px] md:h-[600px] rounded-lg lg:w-[450px] ';

const isLoaded = ref(false);
const data = ref(null);

const databaseName = ref('daily');

onBeforeMount(async () => {
  data.value = await fetchData(databaseName.value);
  data.value && (isLoaded.value = true);
});

const handleSlideChange = e => {
  currentSlide.value = e.realIndex + 1;
};
</script>

<template>
  <Loading v-if="!isLoaded" />

  <Swiper
    v-else
    class="px-2 py-2 my-4 lg:max-w-7xl"
    :autoHeight="true"
    :grabCursor="true"
    :centeredSlides="true"
    :loop="true"
    :spaceBetween="-10"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: -60,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: -220,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: -280,
      },
    }"
    :effect="'coverflow'"
    :coverflowEffect="{
      rotate: 40,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: false,
    }"
    :pagination="{
      el: `.pagination`,
      clickable: true,
    }"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :modules="[EffectCoverflow, Autoplay, Pagination, Navigation]"
    @slideChange="handleSlideChange"
  >
    <SwiperSlide
      v-for="(item, idx) in data"
      :key="idx"
      class="flex justify-center"
      :class="sliderStyle"
    >
      <img
        :src="
          urlFor(item.coverImg)
            .height(600)
            .width(450)
            .auto('format')
            .quality(60)
            .url()
        "
        :class="sliderStyle"
        class="w-[230px] object-cover sm:w-full"
        :alt="item.caption"
      />
    </SwiperSlide>
    <div className="mx-auto mt-4 flex w-[80%] items-center justify-center">
      <span className="flex w-min px-2 text-sm whitespace-nowrap">
        <p className="font-bold">
          {{ currentSlide > 9 ? currentSlide : `0${currentSlide}` }}
        </p>
        / {{ data.length > 9 ? data.length : `0${data.length}` }}
      </span>
      <div className="mx-auto h-8 w-full ">
        <div className="pagination mt-4 grid grid-flow-col"></div>
      </div>
    </div>
  </Swiper>
</template>

<style>
.swiper-pagination-bullet {
  height: 2px;
  background: teal;
  width: 100%;
  border-radius: 0;
}

.swiper-pagination-bullet-active {
  height: 4px;
  transform: translateY(-3px);
}
</style>
