<template>
  <nav
    class="sticky top-0 z-20 flex bg-white items-center justify-between w-full px-4 py-2 font-semibold text-chd">
    <BurgerBTN @menuClicked="handleClicked" />
    <Logo />
    <Menu :isBurgerMenu="isBurgerMenu" />
    <Contact />
  </nav>
</template>

<script setup>
import BurgerBTN from '@navbar/BurgerBTN.vue';
import Logo from '@navbar/Logo.vue';
import Menu from '@navbar/Menu.vue';
import Contact from '@navbar/Contact.vue';

let isBurgerMenu = $ref(false);
const handleClicked = () => {
  isBurgerMenu = !isBurgerMenu;
  // console.log('you clicked me');
  // console.log(isBurgerMenu);
};
</script>
