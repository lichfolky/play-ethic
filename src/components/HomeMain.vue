<script setup>

</script>

<template>
    <div>
        <div class="title">
            <h1>PLAY ETHIC</h1>
            <h2 class="subtitle">Giochi di ruolo per il sociale</h2>
        </div>
        <p class="intro"><strong>PLAY ETHIC</strong> è un progetto di
            <a href="https://www.alteracultura.org/">Altera APS</a>, sviluppato in collaborazione con <a
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
            <source media="(max-width: 600px)" srcset="@/assets/img/photos/book.png" width="300" />
            <source media="(max-width: 1270px)" srcset="@/assets/img/photos/book.png" width="500" />
            <img alt="Giocatori che leggono una raccolta di foto d'epoca" src="@/assets/img/photos/book.webp" width="650"
                height="338" />
        </picture>
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
        <div class="slider mobile">
            <picture>
                <source media="(max-width: 600px)" srcset="@/assets/img/photos/players.png" width="300" />
                <source media="(max-width: 1270px)" srcset="@/assets/img/photos/players.png" width="500" />
                <img alt="players" src="@/assets/img/photos/players.png" width="500" />
            </picture>
        </div>
    </div>
</template>

<style scoped>
.intro {
    padding-bottom: 3rem;
}

.slider.mobile {
    padding-top: 2rem;
    padding-bottom: 1rem;
}

.book {
    padding-bottom: 2rem;
}
</style>
