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

      <h2>
        La call for adventures!
      </h2>
      <p>
        Sono state nominate le avventure vincitrici della seconda edizione della <strong>Call for adventures Play
          Ethic</strong> rivolta ad autori ed
        autrici di avventure di gioco di ruolo che sappiano
        stimolare giocatori e giocatrici ad interrogarsi su
        dilemmi etici, mettersi in discussione e sperimentare nuove possibilità e immedesimazioni.
      </p>
      <div class="slider mobile">
        <picture>
          <source media="(max-width: 600px)" srcset="@/assets/img/photos/players.png" width="300" />
          <source media="(max-width: 1270px)" srcset="@/assets/img/photos/players.png" width="500" />
          <img alt="players" src="@/assets/img/photos/players.png" width="500" />
        </picture>
      </div>
      <p>
        <DiceIcon />
        Tra gli obiettivi del progetto c’è la realizzazione di una raccolta che comprenderà le migliori avventure delle
        due call, che sarà pubblicata sul nostro sito e diffusa gratuitamente.
      </p>
      <p>
        Le avventure dovevano perseguire uno o più dei seguenti scopi:
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

  <!-- <h3 class="call2action">
    Per partecipare <a href="https://drive.google.com/file/d/1zP1oKQhtXSfsPUNUfm4iwAaLaJlMkFzo/view"
      target=”_blank”>
      consulta
      il
      regolamento.
    </a>
    <p class="claim">
      Scadenza prorogata al 5 Luglio!
    </p>
  </h3> -->

  <h4>
    <div>
      <a href="https://drive.google.com/file/d/1H6dshXUiSOWV2hR4Mx7cObiYeW5S4B4u/view?usp=sharing"
        target=”_blank”>Comunicato
        stampa avventure vincitrici (Agosto 2023)</a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1KFhAbCMlzPTSoT3blxKVYn5nDfu4LvtH/view?usp=sharing"
        target=”_blank”>Comunicato
        stampa per proroga scadenza (Giugno 2023)</a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1FqfRl5o4oBd0wE11fcDFvfeuJ35WcfPA/view?usp=sharing"
        target=”_blank”>Comunicato
        stampa di lancio (Gennaio 2023)</a>
    </div>
  </h4>
  <div class="separator"></div>

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
                                                                        href="https://www.alteracultura.org/wp-content/uploads/2021/02/PE_callallegati-def.pdf">
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

.claim {
  color: var(--color-orange);
  text-align: center;
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
