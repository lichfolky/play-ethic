<script setup>
import DiceIcon from '@/components/icons/DiceIcon.vue';
import HomeMain from '../components/HomeMain.vue';
import HomeGallery from '../components/HomeGallery.vue';
import PartnersList from '../components/PartnersList.vue';
import AdventureSection from '../components/AdventureSection.vue';
</script>

<template>
  <section class="hero-grid">
    <HomeMain />
    <HomeGallery />
  </section>

  <div class="separator"></div>

  <AdventureSection />
  <div class="separator"></div>

  <h3 class="call2action">
    Per partecipare <a href="https://drive.google.com/file/d/1Bmx2idwzdmvJPQDXNJnqhlBDzkl63rXC/view?usp=sharing"
      target=”_blank”>
      consulta
      il
      regolamento.
    </a>
  </h3>
  <h4>
    <a href="https://drive.google.com/file/d/1wu6iiZgTUS7UQ8qArkSbY9hrhr3oSc40/view?usp=sharing"
      target=”_blank”>Comunicato
      stampa</a>
  </h4>

  <div class="separator"></div>

  <PartnersList />
</template>

<style scoped>
.subtitle {
  padding-top: 0.5rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: min(var(--text-max-width), 100%) 1fr;
  grid-template-columns: 3fr 2fr;
  justify-content: space-between;
  max-width: var(--page-max-width);
  gap: 2rem;
}

@media (max-width: 1000px) {
  .hero-grid {
    grid-template-columns: 100%;
  }
}

.separator {
  max-width: var(--text-max-width);
  border-bottom: 3px solid var(--color-brown);
  margin: 2rem auto 3rem auto;
  height: 2px;
  width: 100%;
  border-radius: 5px;
}


/*
h4 {
  text-align: center;
  padding-bottom: 1rem;
}

.call2action {
  text-align: center;
  padding-bottom: 3rem;
  margin: 0 auto;
}

section:is(.avventure, .call, .giuria) {
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: var(--text-max-width);
}



section.call {
  text-align: center;
  margin: 0 auto;
  padding-top: 2rem;
}

aside>img {
  margin-bottom: 2rem;
  width: 100%;
}

.col {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#dice {
  float: left;
  fill: var(--color-orange-dark);
  height: 100px;
  padding-right: 1rem;
}

section.call {
  font-weight: 700;
}

section.logo-text {
  display: flex;
  align-items: center;
  max-width: var(--page-max-width);
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
}

section.logo-text p {
  max-width: var(--text-max-width);
}

section.logo-text .altera-logo {
  max-width: 125px;
}

.separator {
  max-width: var(--text-max-width);
  border-bottom: 3px solid var(--color-brown);
  margin: 1rem auto 2rem auto;
  height: 2px;
  width: 100%;
  border-radius: 5px;
}

*/
</style>
