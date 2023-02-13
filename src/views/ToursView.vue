<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Loading from '@components/Loading.vue';
import { fetchData } from '@utils/fetchData';
import { formatCurrency } from '@utils/formatCurrency';
import Trans from '@i18n/translation';
import { urlFor } from '@/sanityClient';

const isLoaded = ref(false);
const data = ref(null);
const route = useRoute();
const router = useRouter();
const databaseName = ref(route.name);

watch(
  () => route.name,
  async () => {
    databaseName.value = route.name;
    data.value = await fetchData(databaseName.value);
    isLoaded.value = true;
  }
);

onBeforeMount(async () => {
  data.value = await fetchData(databaseName.value);
  isLoaded.value = true;
});

const handleTourDetail = slug => {
  document.body.classList.add('noscroll');
  router.push({
    name: route.name === 'daily' ? 'daily-detail' : 'central-detail',
    params: { slug },
  });
};
</script>

<template>
  <Loading v-if="!isLoaded" />
  <section
    v-else
    class="p-2 mx-auto max-w-7xl font-Roboto text-chd"
  >
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-center uppercase">
        {{
          databaseName === 'daily'
            ? $t('tourGallery.daily')
            : $t('tourGallery.central')
        }}
      </h1>
      <p class="text-xl text-center">
        {{ data.length }} {{ $t('tourGallery.counting') }}
      </p>
    </div>
    <div class="flex justify-center">
      <ul
        class="relative z-0 flex w-[320px] flex-wrap gap-1 rounded px-1 text-white md:w-[calc(320px*2+1rem)] lg:w-[calc(320px*3+1.2rem)]"
      >
        <li
          v-for="(tour, idx) in data"
          :key="idx"
          class="group h-[400px] w-[320px] cursor-pointer"
          @click="handleTourDetail(tour.tourSlug[Trans.currentLocale].current)"
        >
          <div
            class="relative grid h-full w-full grid-rows-[1fr_55px] p-3 font-bold"
          >
            <p
              class="z-20 self-end px-3 py-1 mb-2 text-xl leading-6 text-center text-white rounded font-Roboto group-hover:bg-indigo-100/30 group-hover:text-chd"
            >
              {{ tour.tourName[Trans.currentLocale] }}
            </p>
            <span
              class="z-20 self-end px-4 py-1 text-sm text-center text-white rounded-lg justify-self-end bg-gradient-to-tr from-blue-600 to-pink-400"
            >
              {{ $t('tourGallery.price_from') }}
              <p class="-mt-1 text-2xl">
                {{ formatCurrency(data, tour.tourPrice.pax2) }}
              </p>
            </span>
            <div
              class="absolute inset-0 z-10 group-hover:bg-indigo-100/30"
            ></div>
            <img
              :src="
                urlFor(tour.coverImg)
                  .height(400)
                  .auto('format')
                  .quality(60)
                  .url()
              "
              class="absolute z-0 object-cover w-full h-full rounded-lg"
              :alt="tour.coverImg.caption"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
  <RouterView />
</template>
