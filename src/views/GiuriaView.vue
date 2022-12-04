<script setup>
import GiuriaAccordion from '../components/GiuriaAccordion.vue';
import GiuriaComitato from '../components/GiuriaComitato.vue';

</script>
<template>
  <div class="wrapper">

    <main>
      <p>Le avventure saranno valutate da una giuria di esperti del mondo dei giochi di ruolo ed è prevista una
        cerimonia di premiazione. Menzioni speciali verranno attribuite da esperti dei temi etici e sociali. Componenti
        giuria e premi saranno resi noti nella call.</p>
      <p>
        In attesa della nuova call, puoi consultare il bando della prima edizione.
      </p>
      <h2>Il comitato di selezione</h2>
      <GiuriaComitato />
      <h2>La giuria</h2>
      <GiuriaAccordion />
    </main>
  </div>

</template>


<style>

</style>
