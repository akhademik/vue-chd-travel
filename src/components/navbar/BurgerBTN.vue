<script setup>
const emit = defineEmits(['menuClicked']);
let angle = $ref(0);

const handleInput = () => {
  emit('menuClicked');
  angle += 90;
};
</script>
<template>
  <div
    class="relative z-20 flex items-center justify-center w-14 h-14 lg:hidden"
  >
    <input
      type="checkbox"
      class="absolute z-10 w-full h-full opacity-0 cursor-pointer peer"
      @input="handleInput"
    />
    <span
      :style="{ transform: `rotate(${angle}deg)` }"
      class="border-y-4 border-chd h-[15px] w-[36px] transition-all duration-700 ease-in-out peer-checked:animate-pulse peer-hover:p-2"
    ></span>
  </div>
</template>
