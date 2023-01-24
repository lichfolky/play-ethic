<script setup>
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import PartnersList from './components/PartnersList.vue';
</script>

<template>
  <!-- <SkipLink /> -->
  <HeaderSection></HeaderSection>
  <div class="main-wrapper">
    <main id="main">
      <RouterView />
    </main>
  </div>
  <PartnersList />
  <FooterSection />
</template>

<style scoped>
.main-wrapper {
  background-color: var(--color-main-background);
}
</style>
