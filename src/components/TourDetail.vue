<template>
  <h1 v-if="!isLoaded">LOADING</h1>
  <div
    v-else
    :class="STYLE.main_div.main"
  >
    <ButtonSet />
    <LeftSide :data="dataDetail[0]" />

    <h1 class="text-red-500">{{ isLoaded }}</h1>
    <h1 class="text-red-500">{{ slug }}</h1>
  </div>
</template>

<script setup>
import ButtonSet from '@components/toursview/ButtonSet.vue';
import LeftSide from '@components/toursview/LeftSide.vue';

// import { SanityBlocks } from 'sanity-blocks-vue-component';
import { ref, watch, onBeforeMount } from 'vue';
import { fetchData } from '@utils/fetchData';
import { useRoute } from 'vue-router';
import Trans from '@i18n/translation';

const route = useRoute();
const databaseName = ref(route.name.split('-')[0]);
const slug = route.params.slug;

const isLoaded = ref(false);
const data = ref(null);
const dataDetail = ref(null);

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

onBeforeMount(async () => {
  data.value = await fetchData(databaseName.value);
  dataDetail.value = data.value.filter(
    item => item.tourSlug[Trans.currentLocale].current === slug
  );
  data.value && (isLoaded.value = true);
  console.log(dataDetail.value[0].coverImg);
});

const STYLE = {
  main_div: {
    main: `absolute inset-0 z-30 flex h-max flex-col bg-white font-Roboto text-white  
							sm:text-xl lg:h-[120%] lg:flex-row`,
    div_btn: `sticky top-0 z-30 flex w-full justify-between bg-white p-4 text-3xl 
									lg:fixed lg:right-5 lg:top-5 lg:w-min lg:flex-col lg:gap-0.5 lg:bg-transparent`,
    btn: `p-1.5 hover:bg-slate-500 bg-slate-200 hover:text-white text-chd animation-all duration-200 linear`,
  },
  left_div: {
    main: `relative flex min-h-[400px] flex-col items-center justify-end bg-chd/80 
							lg:fixed lg:top-0 lg:bottom-0 lg:w-1/2 lg:justify-center`,
    picture: `absolute inset-0  p-3 
								lg:static lg:flex lg:items-center lg:justify-center lg:p-8`,
    img: `h-full w-full rounded-lg object-cover`,
    div_big_screen: `hidden h-[700px] w-[500px] rounded-lg bg-red-100 p-1 
									before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-tr before:from-lime-400 before:to-fuchsia-400 before:blur-md 
									lg:relative lg:flex`,
    span: `max-w-[500px]  								
					z-10 px-10 text-center pb-10`,
  },
  right_div: {
    main: `flex flex-col justify-center gap-4 p-5 text-chd 
							lg:fixed lg:right-0 lg:h-full lg:w-1/2 lg:overflow-y-auto lg:px-8`,
    ul_p: `relative pb-2 font-bold 
							before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-chd/30`,
    li_div: `absolute left-0 top-1 flex min-h-[23px]  items-center text-lg text-red-600`,
    tbody: `[&>tr>td]:py-1.5 [&>tr>td]:pl-3 [&>tr:nth-child(even)]:bg-red-200 [&>tr>td:nth-child(2)]:pr-3 
								[&>tr>td:nth-child(2)]:text-right [&>tr:last-child]:border-b-4 [&>tr:last-child]:border-chd/80`,
  },
};
</script>
