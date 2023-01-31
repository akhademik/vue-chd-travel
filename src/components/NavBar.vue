<script setup>
import BurgerBTN from '@navbar/BurgerBTN.vue';
import Logo from '@navbar/Logo.vue';
import Menu from '@navbar/Menu.vue';
import Contact from '@navbar/Contact.vue';
import { ref } from 'vue';

const isBurgerMenu = ref(false);
const handleClicked = () => {
  isBurgerMenu.value = !isBurgerMenu.value;
};
</script>

<template>
  <nav
    class="sticky top-0 z-20 flex items-center justify-between w-full px-4 py-2 font-semibold bg-white text-chd"
  >
    <BurgerBTN @menuClicked="handleClicked" />
    <Logo />
    <Menu
      :isBurgerMenu="isBurgerMenu"
      :menuClicked="handleClicked"
    />
    <Contact />
  </nav>
</template>
