<template>
  <Loading v-if="!isLoaded" />
  <teleport to="body">
    <template v-if="data">
      <div
        v-show="isModal"
        class="absolute inset-0 z-30 flex h-max flex-col bg-white font-Roboto text-white sm:text-xl lg:h-[120%] lg:flex-row"
      >
        <transition name="left">
          <LeftSide
            v-show="isTransition"
            :data="currentData"
          />
        </transition>

        <ButtonSet
          @toggleModal="toggleModal"
          @nextItem="nextItem"
          @prevItem="prevItem"
        />
        <transition name="right">
          <RightSide
            v-show="isTransition"
            :data="currentData"
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
  onBeforeUnmount,
  computed,
  onMounted,
  onUnmounted,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Loading from '@components/Loading.vue';
import ButtonSet from '@components/toursview/ButtonSet.vue';
import LeftSide from '@components/toursview/LeftSide.vue';
import RightSide from '@components/toursview/RightSide.vue';

import { fetchData } from '@utils/fetchData';
import Trans from '@i18n/translation';

const route = useRoute();
const router = useRouter();
const databaseName = ref(route.name.split('-')[0]);
const slug = route.params.slug;

const selectedSlugIndex = ref(null);
const isModal = ref(true);
const isTransition = ref(false);
const isLoaded = ref(false);
const data = ref(null);

const currentData = computed(() => data.value[selectedSlugIndex.value]);

const toggleModal = () => {
  isModal.value = !isModal.value;
  document.body.classList.remove('noscroll');
  router.back();
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
        slug: currentData.value.tourSlug[Trans.currentLocale].current,
      },
    });
  }
);

onBeforeMount(async () => {
  data.value = await fetchData(databaseName.value);
  selectedSlugIndex.value = data.value.findIndex(
    item => item.tourSlug[Trans.currentLocale].current === slug
  );

  isLoaded.value = true;
  setTimeout(() => {
    isTransition.value = true;
  }, 10);
});

onBeforeUnmount(() => {
  isTransition.value = false;
}),
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
  transition: all 2s ease;
  transform: translateX(0);
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
