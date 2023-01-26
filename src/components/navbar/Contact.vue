<template>
  <div
    class="relative z-0 justify-end text-2xl lg:flex-1 lg:flex lg:items-center lg:text-xl">
    <UnderlineLink
      name="Contact"
      :url="about" />
    <select
      class="absolute hidden lg:inline top-20"
      value="vn">
      <option value="vn">VN</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  </div>
</template>

<script setup>
import UnderlineLink from '@navbar/UnderlineLink.vue';
</script>
