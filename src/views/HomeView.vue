<script setup>
import DiceIcon from '@/components/icons/DiceIcon.vue';
import HomeMain from '../components/HomeMain.vue';
import HomeGallery from '../components/HomeGallery.vue';
import PartnersList from '../components/PartnersList.vue';
</script>

<template>
  <section class="grid">
    <HomeMain />
    <HomeGallery />
  </section>


  <div class="separator"></div>
  <section class="avventure">
    <!-- <h2>LE AVVENTURE</h2> -->
    <div>
      <p>
        <DiceIcon />
        Tra gli obiettivi del progetto c’è la realizzazione di una raccolta che comprenderà le migliori avventure delle
        due call, che sarà pubblicata sul nostro sito e diffusa gratuitamente.
      </p>
      <p>
        Le avventure partecipanti devono perseguire uno o più dei seguenti scopi:
      </p>
      <ul>
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
          chi è diverso da noi.
        </li>
      </ul>
    </div>

  </section>
  <div class="separator"></div>

  <h3 class="call2action">
    Per partecipare <a href="https://drive.google.com/file/d/1Bmx2idwzdmvJPQDXNJnqhlBDzkl63rXC/view?usp=sharing"
      target=”_blank”>
      consulta
      il
      regolamento.
    </a></h3>
  <h4>

    <a href="https://drive.google.com/file/d/1wu6iiZgTUS7UQ8qArkSbY9hrhr3oSc40/view?usp=sharing"
      target=”_blank”>Comunicato
      stampa</a>
  </h4>
  <div class="separator"></div>
  <section class="giuria">
  <h2>FAQ</h2>
  <p>
    Le avventure saranno valutate da una giuria di esperti del mondo dei giochi di ruolo ed è prevista una cerimonia
    di premiazione. Menzioni speciali verranno attribuite da esperti dei temi etici e sociali. Componenti giuria e
    premi saranno resi noti nella call.</p>
</section>
<!-- 
      <section class="giuria">
        <h2>LA GIURIA</h2>
      <p>
        Le avventure saranno valutate da una giuria di esperti del mondo dei giochi di ruolo ed è prevista una cerimonia
        di premiazione. Menzioni speciali verranno attribuite da esperti dei temi etici e sociali. Componenti giuria e
        premi saranno resi noti nella call.</p>
    </section> -->

<!--
    <section class="call">
     <p>
          In attesa della nuova call, puoi consultare il <a
            href="http://www.alteracultura.org/wp-content/uploads/2021/02/PE_callallegati-def.pdf">
          bando della prima edizione.
        </a></p> 
        </section>

      -->

<!-- <section class="logo-text">
      <p>
          L’associazione culturale Àltera è nata nel 2001 dalla collaborazione di lavoratori, studenti e docenti
          universitari
          dell’area torinese. Altera si propone di comprendere e discutere criticamente i mutamenti culturali, artistici e
          sociali della società in cui viviamo.
        </p>
        <img alt="altera logo" class="altera-logo" src="@/assets/img/loghi/altera-logo.svg" />
      </section> -->

  <PartnersList />
</template>

<style scoped>
.subtitle {
  padding-top: 0.5rem;
}

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
  max-width: var(--text-width);
}

section.grid {
  display: grid;
  width: fit-content;
  grid-template-columns: minmax(auto, 600px) minmax(auto, 500px);
  justify-content: space-between;
  padding-bottom: 2rem;
}

@media (max-width: 1000px) {
  section.grid {
    display: grid;
    grid-template-columns: 100%;
  }
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
  max-width: var(--page-width);
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
}

section.logo-text p {
  max-width: var(--text-width);
}

section.logo-text .altera-logo {
  max-width: 125px;
}

.separator {
  max-width: var(--text-width);
  border-bottom: 3px solid var(--color-brown);
  margin: 1rem auto 2rem auto;
  height: 2px;
  width: 100%;
  border-radius: 5px;
}
</style>
