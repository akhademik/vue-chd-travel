<script setup>
import { useI18n } from 'vue-i18n';
import { formatCurrency } from '@utils/formatCurrency';
import Trans from '@i18n/translation';
import { SanityBlocks } from 'sanity-blocks-vue-component';

const { t } = useI18n();

const props = defineProps(['data']);

const priceRange = [
  {
    size: `${t('tourGallery.group')} 01 ${t('tourGallery.pax')}`,
    price: 'pax1',
  },
  {
    size: `${t('tourGallery.group')} 02 ${t('tourGallery.pax')}`,
    price: 'pax2',
  },
  {
    size: `${t('tourGallery.group')} 03 - 04 ${t('tourGallery.pax')}`,
    price: 'pax3_4',
  },
  {
    size: `${t('tourGallery.group')} 05 - 06 ${t('tourGallery.pax')}`,
    price: 'pax5_6',
  },
  {
    size: `${t('tourGallery.group')} 07 - 09 ${t('tourGallery.pax')}`,
    price: 'pax7_9',
  },
  {
    size: `${t('tourGallery.group')} > 10 ${t('tourGallery.pax')}`,
    price: 'pax10_up',
  },
];
</script>

<template>
  <div
    class="flex flex-col justify-center gap-4 p-5 text-chd lg:fixed lg:right-0 lg:h-full lg:w-1/2 lg:overflow-y-auto lg:px-8"
  >
    <div class="h-full max-w-4xl mx-auto">
      <div class="flex flex-col gap-2 my-6 lg:mt-32">
        <p
          class="relative pb-2 font-bold before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-chd/30"
        >
          {{ $t('tourGallery.tour_intro') }}
        </p>
        <span class="px-2">
          <SanityBlocks :blocks="props.data.tourIntro[Trans.currentLocale]" />
        </span>
      </div>
      <ul class="flex flex-col gap-2">
        <p
          class="relative pb-2 font-bold before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-chd/30"
        >
          {{ $t('tourGallery.tour_hightlights') }}
        </p>
        <li
          v-for="({ highlights }, idx) in props.data.tourHighlights"
          :key="idx"
          class="relative gap-2 pl-6"
        >
          <div
            class="absolute left-0 top-1 flex min-h-[23px] items-center text-lg text-red-600"
          >
            <!-- Arrow Down Right -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M198 88v104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h89.5L59.8 68.2a5.9 5.9 0 0 1 8.4-8.4L186 177.5V88a6 6 0 0 1 12 0Z"
              />
            </svg>
          </div>
          {{ highlights[Trans.currentLocale] }}
        </li>
      </ul>

      <div class="flex flex-col gap-2 my-6">
        <p
          class="relative pb-2 font-bold before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-chd/30"
        >
          {{ $t('tourGallery.tour_itinerary') }}
        </p>
        <span class="px-2">
          <SanityBlocks
            :blocks="props.data.tourItinerary[Trans.currentLocale]"
          />
        </span>
      </div>

      <div class="flex flex-col gap-2 my-6">
        <p
          class="relative pb-2 font-bold before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-chd/30"
        >
          {{ $t('tourGallery.tour_price') }}
        </p>
        <table
          class="mx-auto mt-3 mb-6 min-w-[328px] text-chd sm:min-w-[450px]"
        >
          <thead class="bg-chd/80">
            <tr class="text-white [&>th]:py-2">
              <th class="rounded-tl-lg">
                {{ $t('tourGallery.price_pax_no') }}
              </th>
              <th class="rounded-tr-lg">{{ $t('tourGallery.price_price') }}</th>
            </tr>
          </thead>
          <tbody
            class="[&>tr>td]:py-1.5 [&>tr>td]:pl-3 [&>tr:nth-child(even)]:bg-red-200 [&>tr>td:nth-child(2)]:pr-3 [&>tr>td:nth-child(2)]:text-right [&>tr:last-child]:border-b-4 [&>tr:last-child]:border-chd/80"
          >
            <tr
              v-for="(item, idx) in priceRange"
              :key="idx"
            >
              <template v-if="props.data.tourPrice[item.price]">
                <td>{{ item.size }}</td>
                <td>
                  {{
                    formatCurrency(props.data, props.data.tourPrice[item.price])
                  }}
                  /pax
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="flex flex-col gap-2 pb-10">
        <p
          class="relative pb-2 font-bold before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-chd/30"
        >
          {{ $t('tourGallery.tour_inclusion') }}
        </p>

        <li
          v-for="(item, idx) in props.data.tourIncludes.includes"
          :key="idx"
          class="relative gap-2 pl-6"
        >
          <div
            class="absolute left-0 top-1 flex min-h-[23px] items-center text-lg text-red-600"
          >
            <!-- checked mark -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z"
              />
            </svg>
          </div>
          {{ item[Trans.currentLocale] }}
        </li>
      </ul>
    </div>
  </div>
</template>
