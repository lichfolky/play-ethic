<script setup>
import SectionSeparator from '@/components/SectionSeparator.vue';
</script>

<template>
  <div class="grid">
    <div>
      <div class="title">
        <h1>PLAY ETHIC!</h1>
        <h2 class="subtitle">Gioco di ruolo per il sociale</h2>
      </div>
      <p class="short"><strong>PLAY ETHIC</strong> è un progetto di
        <a href="">Altera APS</a>, sviluppato in collaborazione con <a href="">Il FortunaDado</a> e realizzato con il
        contributo di <a href="">Fondazione CRT</a>, per esplorare il valore educativo e le potenzialità del mondo del
        gioco narrativo e sprigionare il suo potenziale come pratica culturale e di riflessione sociale immersiva e
        collettiva,
        stimolando relazioni, empatia e curiosità.
      </p>
      <img class="interc" alt="book" src="@/assets/img/book.png" width="650" />
      <h2>
        La call for adventures
      </h2>
      <p class=" ">
        E' partita la seconda edizione della Call for adventures del progetto Play Ethic, per avventure di gioco di
        ruolo che sappiano stimolare giocatori e giocatrici a interrogarsi su dilemmi etici non banali, mettersi in
        discussione e sperimentare nuove possibilità.
      </p>

      <p class=" ">
        La call prevederà una rosa di linee tematiche e le avventure proposte dovranno enfatizzare almeno una tra
        queste. Le avventure dovranno utilizzare sistemi di gioco con licenze open ed essere rilasciate con licenza
        creative commons.
      </p>
    </div>
    <aside><img alt="players" src="@/assets/img/players.png" width="500" />
      <img id="bellaciao" alt="conference" src="@/assets/img/conference.png" width="500" />
    </aside>
  </div>
  <SectionSeparator imgName="awesome" />
  <p class="">
    Le avventure partecipanti devono perseguire uno o più dei seguenti scopi:
  </p>
  <ul class="">
    <li> delineare mondi possibili alternativi, ad esempio in termini di rapporti socio-economici, culturali,
      ambientali
    </li>
    <li> mettere i personaggi (e dunque i giocatori e le giocatrici) di fronte a dilemmi etici non banali
    </li>
    <li>
      farci accorgere dei nostri pregiudizi, delle abitudini che diamo per scontate
    </li>
    <li>
      farci capire (e decostruire) i ‘pregiudizi’ altrui, così da favorire la comprensione e dunque il dialogo con
      chi
      è diverso da noi.
    </li>
  </ul>
  <SectionSeparator img="awesome" />
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 1rem;
  justify-content: space-between;
}

.subtitle {
  padding-top: 0.5rem;
}

aside {
  padding-top: 0.5rem;
}

aside>img {
  margin-bottom: 2rem;
}

.interc {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.img {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.col {
  width: fit-content;
}
</style>
