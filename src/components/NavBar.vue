<template>
  <nav
    class="sticky top-0 z-20 flex items-center px-4 py-2 font-semibold text-chd">
    <BurgerBTN @menuClicked="isBurgerMenu = !isBurgerMenu" />
    <Logo />
    <Menu v-show="isBurgerMenu" />
  </nav>
</template>

<script setup>
import BurgerBTN from '@navbar/BurgerBTN.vue';
import Logo from '@navbar/Logo.vue';
import Menu from '@navbar/Menu.vue';

let isBurgerMenu = $ref(false);
</script>
