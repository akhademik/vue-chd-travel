<template>
  <Loading v-if="!isLoaded" />
  <teleport to="body">
    <template v-if="dataDetail">
      <div
        v-show="isModal"
        class="absolute inset-0 z-30 flex h-max flex-col bg-white font-Roboto text-white sm:text-xl lg:h-[120%] lg:flex-row"
      >
        <ButtonSet
          @toggleModal="toggleModal"
          @nextItem="nextItem"
          @prevItem="prevItem"
        />
        <LeftSide :data="dataDetail[0]" />
        <RightSide :data="dataDetail[0]" />
      </div>
    </template>
  </teleport>
</template>

<script setup>
import Loading from '@components/Loading.vue';
import ButtonSet from '@components/toursview/ButtonSet.vue';
import LeftSide from '@components/toursview/LeftSide.vue';
import RightSide from '@components/toursview/RightSide.vue';

import { ref, watch, onBeforeMount } from 'vue';
import { fetchData } from '@utils/fetchData';
import { useRoute, useRouter } from 'vue-router';
import Trans from '@i18n/translation';

const route = useRoute();
const router = useRouter();
const databaseName = ref(route.name.split('-')[0]);
const slug = route.params.slug;

const currentSlugIndex = ref(null);
const totalSlugIndex = ref(null);
const isModal = ref(true);
const isLoaded = ref(false);
const data = ref(null);
const dataDetail = ref(null);

const toggleModal = () => {
  isModal.value = !isModal.value;
  router.go(-1);
};

const nextItem = () => {
  if (currentSlugIndex.value < totalSlugIndex.value) {
    currentSlugIndex.value += 1;
  } else {
    currentSlugIndex.value = 0;
  }
};

const prevItem = () => {
  if (currentSlugIndex.value > 0) {
    currentSlugIndex.value = currentSlugIndex.value - 1;
  } else {
    currentSlugIndex.value = totalSlugIndex.value;
  }
};

watch(
  () => route.params.slug,
  async () => {
    databaseName.value = route.name;
    data.value = await fetchData(databaseName.value);
    dataDetail.value = data.value.filter(
      item => item.tourSlug[Trans.currentLocale].current === slug
    );
    data.value && (isLoaded.value = true);
  }
);

watch(
  () => currentSlugIndex.value,
  () => {
    dataDetail.value = [data.value[currentSlugIndex.value]];
    router.push({
      params: {
        locale: Trans.currentLocale,
        slug: dataDetail.value[0].tourSlug[Trans.currentLocale].current,
      },
    });
    console.log(dataDetail.value[0].tourSlug[Trans.currentLocale].current);
  }
);

onBeforeMount(async () => {
  data.value = await fetchData(databaseName.value);
  dataDetail.value = data.value.filter(
    item => item.tourSlug[Trans.currentLocale].current === slug
  );
  data.value && (isLoaded.value = true);
  currentSlugIndex.value = data.value.findIndex(
    item => item.tourSlug[Trans.currentLocale].current === slug
  );
  totalSlugIndex.value = data.value.length - 1;
});
</script>
