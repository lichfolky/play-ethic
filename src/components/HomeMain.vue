<script setup>
import AdventureSection from '../components/AdventureSection.vue';

</script>

<template>
    <div class="wrapper">

        <div class="title">
            <h1>PLAY<br>ETHIC</h1>
            <h2 class="subtitle">Giochi di ruolo per il sociale</h2>
        </div>
        <p class="intro"><strong>PLAY ETHIC</strong> è un progetto di
            <a href="http://www.alteracultura.org/">Altera APS</a>, sviluppato in collaborazione con <a
                href="https://www.facebook.com/IlFortunaDado/">Il
                FortunaDado</a> e realizzato con il
            contributo della <a href="https://www.fondazionecrt.it/">Fondazione CRT</a>, per esplorare il valore
            educativo
            e le
            potenzialità del mondo del
            gioco narrativo e sprigionare il suo potenziale come pratica culturale e di riflessione sociale immersiva e
            collettiva,
            stimolando relazioni, empatia e curiosità.
        </p>

        <picture class="book">
            <source type="image/avif"
                srcset="@/assets/img/photos/image-3.avif 1x, @/assets/img/photos/image-3@2x.avif 2x" />
            <img alt="Giocatori che leggono una raccolta di foto d'epoca" src="@/assets/img/photos/image-3.jpg" />
        </picture>
        <section class="la-call">
            <h2>
                La call for adventures!
            </h2>
            <p>
                E' aperta la seconda edizione della <strong>Call for adventures Play Ethic</strong> rivolta ad autori ed
                autrici di avventure di gioco di ruolo che sappiano
                stimolare giocatori e giocatrici ad interrogarsi su
                dilemmi etici, mettersi in discussione e sperimentare nuove possibilità e immedesimazioni.
            </p>
            <p>
                La call prevede una rosa di linee tematiche, le avventure proposte dovranno enfatizzare almeno una tra
                queste e dovranno utilizzare sistemi di gioco con licenze open ed essere rilasciate con licenza
                creative commons.
            </p>
        </section>
        <picture class="slider mobile players">
            <source type="image/avif"
                srcset="@/assets/img/photos/image-2.avif 1x, @/assets/img/photos/image-2@2x.avif 2x" />
            <img alt="Giocatori di ruolo entusiasti e sorridenti" src="@/assets/img/photos/image-2.jpg" />
        </picture>
        <AdventureSection></AdventureSection>
    </div>
</template>

<style scoped>
h1 {
    white-space: pre-wrap;
}

.intro {
    padding-bottom: 3rem;
}

.slider {
    padding-top: 2rem;
    padding-bottom: 1rem;
}

section {
    padding: 2rem 0 1rem 0;
}



/* .book {
    padding-bottom: 2rem;
    max-width: 650px;
    height: 365.5px;
}
.players {
    max-width: 650px;
    height: 365.5px;
} */
</style>
