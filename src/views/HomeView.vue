<script setup>
</script>

<template>
  <div class="wrapper">
    <main>
      <div class="title">
        <h1>PLAY ETHIC</h1>
        <h2 class="subtitle">Gioco di ruolo per il sociale</h2>
      </div>
      <p><strong>PLAY ETHIC</strong> è un progetto di

        <a href="">Altera APS</a>, sviluppato in collaborazione con <a href="">Il FortunaDado</a> e realizzato con il
        contributo di <a href="">Fondazione CRT</a>, per esplorare il valore educativo e le potenzialità del mondo del
        gioco narrativo e sprigionare il suo potenziale come pratica culturale e di riflessione sociale immersiva e
        collettiva,
        stimolando relazioni, empatia e curiosità.
      </p>
      <img class="interc" alt="book" src="@/assets/img/book.png" width="700" />
      <h2>
        La call for adventures
      </h2>
      <p>
        PLAY ETHICado e realizzato con il contributo di Fondazione CRT, ispirato dalla ricerca-azione per esplorare il
        valore educativo del praticare i giochi di ruolo. Il suo scopo è sprigionare il potenziale del gioco di ruolo
        come pratica culturale di riflessione sociale immersiva e collettiva, stimolando immaginazione, empatia, e
        curiosità.
      </p>
      <p>
        PLAY ETHICado e realizzato con il contributo di Fondazione CRT, ispirato ddi ruolo. Il suo scopo è sprigionare
        il potenziale del gioco di ruolo come pratica culturale di riflessione sociale immersiva e collettiva,
        stimolando immaginazione, empatia, e curiosità.
      </p>
    </main>
    <aside>
      <img alt="players" src="@/assets/img/players.png" width="500" />
      <img alt="conference" src="@/assets/img/conference.png" width="500" />
    </aside>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 700px 500px;
  padding: 4rem 0;
  background-color: var(--color-main-background);
  justify-content: center;
}

p {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 600px;
}

.h1,
h2 {
  user-select: none;
}

.subtitle {
  padding-top: 0.5rem;
}

main {
  flex: 1;
  padding: 0 1rem;
}

aside {
  padding: 0 1rem;
  padding-top: 0.5rem;
}

aside>img {
  margin-bottom: 2rem;
}

.interc {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

img {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
