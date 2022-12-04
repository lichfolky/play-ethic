<script setup>
import { RouterView } from 'vue-router';
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import PartnersList from './components/PartnersList.vue';
</script>

<template>
  <HeaderSection></HeaderSection>
  <div class="main-wrapper">
    <main>
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

main {
  width: var(--page-width);
  padding: var(--page-padding-top) var(--page-padding-inline) var(--page-padding-top) var(--page-padding-inline);
  margin: 0 auto;
}
</style>
