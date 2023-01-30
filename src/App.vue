<script setup>
import NavBar from '@components/NavBar.vue';
import LanguageSwitcher from '@components/LanguageSwitcher.vue';
import Test from '@components/Test.vue';
</script>
<template>
  <!-- <NavBar /> -->
  <Test />
  <LanguageSwitcher />
  <RouterView />
</template>
