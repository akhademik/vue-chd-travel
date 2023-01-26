<template>
  <a
    :href="url"
    :style="{ '--color': color }"
    class="relative inline-block overflow-hidden px-[1px] pb-1 pt-[1px] z-20 font-Roboto before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] before:w-full before:bg-[var(--color)] after:absolute after:bottom-0 after:-left-[180%] after:block after:h-[2px] after:w-full after:bg-[var(--color)] after:transition after:duration-[800ms] before:transition before:duration-[800ms] hover:after:translate-x-[180%] hover:before:translate-x-[180%] mt-1">
    {{ name }}
  </a>
</template>

<script setup>
// Need to import function to get color from tailwind
// import colors from 'tailwindcss/colors';
// Then to get the color use COLORS.COLOR[RANGE] => colors.red[400]
// Example
// <UnderlineLink name={'Get In Touch'} url={'/'} color={colors.teal[500]}/>
defineProps({
  name: { type: String, default: 'HA TRan' },
  color: { type: String, default: '#003D59' },
  url: { type: String, default: '#' },
});
</script>
