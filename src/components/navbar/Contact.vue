<template>
  <div
    class="relative z-0 justify-end text-2xl lg:flex-1 lg:flex lg:items-center lg:text-xl">
    <select
      class="hidden mr-3 lg:inline"
      value="vn">
      <option value="vn">VN</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
    <UnderlineLink
      name="Contact"
      url="" />
  </div>
</template>

<script setup>
import UnderlineLink from '@navbar/UnderlineLink.vue';
</script>
