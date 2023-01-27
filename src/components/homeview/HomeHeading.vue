<template>
  <p
    class="lead mx-auto bg-gradient-to-r from-lime-700 to-rose-500 bg-clip-text px-2 py-6 text-center font-Roboto text-3xl font-extrabold uppercase leading-normal text-transparent sm:max-w-3xl sm:text-5xl sm:leading-[3.5rem]">
    {{ heading }}
  </p>
</template>

<script setup>
defineProps(['heading']);
</script>
