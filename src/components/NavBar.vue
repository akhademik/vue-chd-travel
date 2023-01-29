<script setup>
import BurgerBTN from '@navbar/BurgerBTN.vue';
import Logo from '@navbar/Logo.vue';
import Menu from '@navbar/Menu.vue';
import Contact from '@navbar/Contact.vue';

let isBurgerMenu = $ref(false);
const handleClicked = () => {
  isBurgerMenu = !isBurgerMenu;
};
</script>

<template>
  <nav
    class="sticky top-0 z-20 flex items-center justify-between w-full px-4 py-2 font-semibold bg-white text-chd"
  >
    <BurgerBTN @menuClicked="handleClicked" />
    <Logo />
    <Menu :isBurgerMenu="isBurgerMenu" />
    <Contact />
  </nav>
</template>
