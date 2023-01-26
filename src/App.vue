<script setup>
import NavBar from '@components/NavBar.vue';
</script>
<template>
  <NavBar />

  <!-- <Routes>
						<Route path='/' exact element={<Home />}/>
						<Route path=':sluglv1' element={<SlugLvl1Redirect />}>							
							<Route path=':sluglv2' element={<TourDetails />}/>
						</Route>
					</Routes> -->
  <RouterView />
</template>
