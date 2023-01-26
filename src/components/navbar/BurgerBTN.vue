<script setup>
const emit = defineEmits(['menuClicked']);
let angle = $ref(0);

const handleInput = () => {
  angle += 90;
  emit('menuClicked');
};
</script>
<template>
  <div
    class="relative z-20 flex items-center justify-center w-14 h-14 lg:hidden">
    <input
      type="checkbox"
      class="absolute z-10 w-full h-full opacity-0 cursor-pointer peer"
      @change="handleInput" />
    <span
      :style="{ transform: `rotate(${angle}deg)` }"
      class="border-y-4 border-chd h-[20px] w-[36px] transition-all duration-500 ease-in-out peer-checked:animate-pulse peer-hover:p-2"></span>
  </div>
</template>
