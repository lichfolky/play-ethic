<script setup>
import HeaderSection from './components/HeaderSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <!-- <SkipLink /> -->
  <HeaderSection></HeaderSection>
  <main id="main">
    <div class="content">
      <RouterView />
    </div>
  </main>
  <FooterSection />
</template>

<style scoped>

</style>
