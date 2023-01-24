<script setup>
import DiceIcon from '@/components/icons/DiceIcon.vue';
import AwesomeSeparator from '../components/AwesomeSeparator.vue';
</script>

<template>
  <section class="grid">
    <div class="fort">
      <div class="title">
        <h1>PLAY ETHIC!</h1>
        <h2 class="subtitle">Giochi di ruolo per il sociale</h2>
      </div>
      <p class="intro"><strong>PLAY ETHIC</strong> è un progetto di
        <a href="http://www.alteracultura.org/">Altera APS</a>, sviluppato in collaborazione con <a
          href="https://www.facebook.com/IlFortunaDado/">Il
          FortunaDado</a> e realizzato con il
        contributo di <a href="https://www.fondazionecrt.it/">Fondazione CRT</a>, per esplorare il valore educativo e le
        potenzialità del mondo del
        gioco narrativo e sprigionare il suo potenziale come pratica culturale e di riflessione sociale immersiva e
        collettiva,
        stimolando relazioni, empatia e curiosità.
      </p>
      <picture class="book">
        <source media="(max-width: 600px)" srcset="@/assets/img/photos/book.png" width="300" />
        <source media="(max-width: 1270px)" srcset="@/assets/img/photos/book.png" width="500" />
        <img alt="Giocatori che leggono una raccolta di foto d'epoca" src="@/assets/img/photos/book.webp" width="650"
          height="650" />
      </picture>
      <h2>
        La nuova call for adventures!
      </h2>
      <p>
        La seconda edizione della <strong>Call for adventures Play Ethic</strong> è per autori e autrici di avventure di
        gioco di ruolo che sappiano stimolare giocatori e giocatrici ad interrogarsi su dilemmi etici, mettersi in
        discussione e sperimentare nuove possibilità e immedesimazioni.
      </p>
      <p>
        La prevede una rosa di linee tematiche e le avventure proposte dovranno enfatizzare almeno una tra
        queste. Le avventure dovranno utilizzare sistemi di gioco con licenze open ed essere rilasciate con licenza
        creative commons.
      </p>
      <div class="slider mobile">
        <picture>
          <source media="(max-width: 600px)" srcset="@/assets/img/photos/players.png" width="300" />
          <source media="(max-width: 1270px)" srcset="@/assets/img/photos/players.png" width="500" />
          <img alt="players" src="@/assets/img/photos/players.png" width="500" />
        </picture>
      </div>
    </div>
    <aside class="desktop">
      <picture>
        <source media="(max-width: 1270px)" srcset="@/assets/img/photos/players.png" width="400" />
        <img alt="players" src="@/assets/img/photos/players.png" width="500" />
      </picture>
      <picture>
        <source media="(max-width: 1270px)" srcset="@/assets/img/photos/conference.png" width="400" />
        <img id="bellaciao" alt="conference" src="@/assets/img/photos/conference.png" width="500" />
      </picture>
    </aside>
  </section>
  <AwesomeSeparator />
  <section class="avventure">
    <h2>LE AVVENTURE</h2>

    <div>

      <!-- <h2>Perché partecipare alla Call? </h2> -->
      <!-- <p>
        Le avventure di Play Ethic saranno giocate in diversi contesti con l’obiettivo di sperimentare nuove situazioni,
        mettersi in discussione e conoscere nuovi modi di affrontare scelte e situazioni complesse. L’ampio partenariato
        che costruiamo intorno alle iniziative e agli eventi play ethic punta proprio alla diffusione di momenti e
        occasioni di gioco, che siano in una scuola, in un associazione o in un contesto puramente ludico. Crediamo che
        il gioco di ruolo sia uno strumento potente di trasformazione di sé, perché è a tutti gli effetti un’esperienza
        di vita che ci lascia qualcosa, che ci permette di schierarci e lottare come eroi ed eroine, esplorare nuovi
        mondi e allargare le frontiere del possibile e di riflesso immaginare un mondo migliore qui e ora.
      </p> -->
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
    <!-- <div class="col desktop">
      <DiceIcon />
    </div> -->
  </section>
  <section class="giuria">
    <h2>LA GIURIA</h2>
    <p>
      Le avventure saranno valutate da una giuria di esperti del mondo dei giochi di ruolo ed è prevista una cerimonia
      di
      premiazione. Menzioni speciali verranno attribuite da esperti dei temi etici e sociali. Componenti giuria e premi
      saranno resi noti nella call.</p>
  </section>
  <section class="call">
    <p>
      In attesa della nuova call, puoi consultare il <a
        href="http://www.alteracultura.org/wp-content/uploads/2021/02/PE_callallegati-def.pdf">
        bando della prima edizione.
      </a></p>
  </section>
  <AwesomeSeparator />

  <section class="logo-text">
    <img alt="altera logo" class="altera-logo" src="@/assets/img/altera-logo.svg" />
    <p>
      L’associazione culturale Àltera è nata nel 2001 dalla collaborazione di lavoratori, studenti e docenti
      universitari
      dell’area torinese. Altera si propone di comprendere e discutere criticamente i mutamenti culturali, artistici e
      sociali della società in cui viviamo.
    </p>
  </section>
  <section>
    <h3 class="newsletter-title">
      Iscriviti alla nostra newsletter
    </h3>
    <div class="newsletter">
      <p class="small">
        Quando partirà la call, riceverai una mail con tutti i dettagli del contest e aggiornamenti sulle attività
        di Play Ethic e altre nostre iniziative.
      </p>
      <form id="newsletter-form"
        action="https://alteracutura.us14.list-manage.com/subscribe/post?u=94050c7fdc8ebd7da4094157d&amp;id=227e82f7fb"
        method="post" name="subscribe-form" class="validate" target="_blank" novalidate="">
        <input id="email" type="email" value="" name="email" class="email" placeholder="indirizzo email" required>
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input type="text" name="b_94050c7fdc8ebd7da4094157d_227e82f7fb" tabindex="-1" value="">
        </div>
        <div class="clear">
          <input type="submit" value="Iscriviti" name="subscribe" class="button">
        </div>
      </form>
    </div>

  </section>

</template>

<style scoped>
.subtitle {
  padding-top: 0.5rem;
}

section.grid {
  grid-template-columns: minmax(auto, 600px) auto;
}

aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
}

.intro {
  padding-bottom: 3rem;
}

.book {
  padding-bottom: 2rem;

}

.call {
  text-align: center;
  margin: 0 auto;
}

.fort {
  width: 100%;
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

section .newsletter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: var(--text-width);
}

.newsletter-title {
  text-align: center;
}

#newsletter-form {
  display: flex;
  padding: 1rem 0;
  height: 4rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.newsletter p {
  flex: 1 0 100%;
}

#newsletter-form .email {
  width: 30ch;
}

#newsletter-form .button {
  min-height: 32px;
}

section.call {
  font-weight: 700;
}

section.logo-text {
  display: flex;
  align-items: center;
  width: clamp(400px, auto, var(--page-width));
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
}

section.logo-text p {
  flex: 1 0 100%;
}

section.logo-text .altera-logo {
  max-width: 125px;
}
</style>
