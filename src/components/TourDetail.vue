<template>
  <Loading v-if="!isDataLoaded" />
  <teleport to="body">
    <template v-if="data">
      <div
        class="absolute inset-0 z-30 flex h-max flex-col bg-white font-Roboto text-white sm:text-xl lg:h-[120%] lg:flex-row"
      >
        <transition
          name="button"
          mode="out-in"
        >
          <ButtonSet
            v-show="isModalOpen"
            @toggleModal="toggleModal"
            @nextItem="nextItem"
            @prevItem="prevItem"
          />
        </transition>
        <transition
          name="left"
          mode="out-in"
        >
          <LeftSide
            v-show="isModalOpen"
            :data="tourData"
          />
        </transition>

        <transition
          name="right"
          mode="out-in"
        >
          <RightSide
            v-show="isModalOpen"
            :data="tourData"
          />
        </transition>
      </div>
    </template>
  </teleport>
</template>

<script setup>
import {
  ref,
  watch,
  onBeforeMount,
  computed,
  onMounted,
  onUnmounted,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { delayAction } from '@/utils/delayAction';

import Loading from '@components/Loading.vue';
import ButtonSet from '@components/toursview/ButtonSet.vue';
import LeftSide from '@components/toursview/LeftSide.vue';
import RightSide from '@components/toursview/RightSide.vue';

import { fetchData } from '@utils/fetchData';
import Trans from '@i18n/translation';

const delayTime = 1000;
const route = useRoute();
const router = useRouter();
const databaseName = ref(route.name.split('-')[0]);
const slug = route.params.slug;

const selectedSlugIndex = ref(null);
const isModalOpen = ref(false);
const isDataLoaded = ref(false);
const data = ref(null);

const tourData = computed(() => data.value[selectedSlugIndex.value]);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
  document.body.classList.remove('noscroll');
  delayAction(() => router.back(), delayTime);
};

const nextItem = () => {
  if (selectedSlugIndex.value < data.value.length - 1) {
    selectedSlugIndex.value += 1;
  } else {
    selectedSlugIndex.value = 0;
  }
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const prevItem = () => {
  if (selectedSlugIndex.value > 0) {
    selectedSlugIndex.value = selectedSlugIndex.value - 1;
  } else {
    selectedSlugIndex.value = data.value.length - 1;
  }
};

const handleResize = () => {
  const width = document.documentElement.clientWidth;

  if (width < 1024 && document.body.classList.contains('noscroll')) {
    document.body.classList.remove('noscroll');
  } else if (width >= 1024 && !document.body.classList.contains('noscroll')) {
    document.body.classList.add('noscroll');
  }
};

watch(
  () => selectedSlugIndex.value,
  () => {
    router.replace({
      params: {
        slug: tourData.value.tourSlug[Trans.currentLocale].current,
      },
    });
  }
);

onBeforeMount(async () => {
  data.value = await fetchData(databaseName.value);
  selectedSlugIndex.value = data.value.findIndex(
    item => item.tourSlug[Trans.currentLocale].current === slug
  );
  isDataLoaded.value = true;
  data.value && delayAction(() => (isModalOpen.value = true), 1);
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style>
.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
  transition: all v-bind(`${delayTime/1000}s`) ease;
  transform: translateX(0);
}
.button-enter-active,
.button-leave-active {
  transition: all v-bind(`${delayTime/1000}s`) ease;
  transform: translateX(0);
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.left-enter-from,
.left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.right-enter-from,
.right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
