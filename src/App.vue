<script setup>
import TopBar from './components/TopBar.vue';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <TopBar></TopBar>
  <NavBar></NavBar>
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>

<style scoped></style>
