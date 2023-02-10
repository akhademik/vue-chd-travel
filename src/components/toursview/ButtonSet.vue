<template>
  <div
    class="sticky top-0 z-30 flex w-full justify-between bg-white p-4 text-3xl lg:fixed lg:right-5 lg:top-5 lg:w-min lg:flex-col lg:gap-0.5 lg:bg-transparent"
  >
    <button
      class="p-1.5 hover:bg-slate-500 bg-slate-200 hover:text-white text-chd animation-all duration-200 linear"
      @click="handleClose"
    >
      <!-- CLOSE ICON -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94L6.28 5.22Z"
        />
      </svg>
    </button>
    <div class="flex gap-0.5 lg:flex-col">
      <button
        class="p-1.5 hover:bg-slate-500 bg-slate-200 hover:text-white text-chd animation-all duration-200 linear"
        @click="handlePrev"
      >
        <!-- LEFT ICON-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        class="p-1.5 hover:bg-slate-500 bg-slate-200 hover:text-white text-chd animation-all duration-200 linear"
        @click="handleNext"
      >
        <!-- RIGHT ICON -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup></script>
