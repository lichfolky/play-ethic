<script setup>
import GiuriaAccordion from '../components/GiuriaAccordion.vue';
import GiuriaComitato from '../components/GiuriaComitato.vue';
</script>

<template>
  <div class="wrapper">
    <h2>La giuria</h2>
    <p>Le avventure saranno valutate da una giuria di esperti del mondo dei giochi di ruolo ed è prevista una
      cerimonia di premiazione. Menzioni speciali verranno attribuite da esperti dei temi etici e sociali.

    </p>
    <h3>Il comitato di selezione</h3>
    <GiuriaComitato />
    <h3>La giuria</h3>
    <GiuriaAccordion />

    <p>
      Qualora una o più delle avventure tocchino argomenti che richiedono competenze specifiche, il comitato di
      selezione
      potrà avvalersi di consulenze da parte di esterni di comprovata competenza in materia.
      In particolare, si avvarrà della consulenza di esperti/e provenienti da Enti del Terzo Settore e ricercatrici
      universitarie come di seguito dettagliato, esperti/e che potranno assegnare una menzione di merito:
    </p>
    <ul>
      <li>l’ONG <a href="https://www.cifaong.it"><strong>C.I.F.A. ETS</strong></a> sui temi “Corpo e tecnologia” e
        “Intersezionalità delle
        discriminazioni”
      </li>
      <li>l'associazione <a href="https://www.gioseftorino.eu"><strong>Giosef Torino</strong> </a> sui temi
        “Intersezionalità
        delle
        discriminazioni” e
        “Globale/locale”
      </li>
      <li>l’associazione <a href="https://www.legambientepiemonte.it"><strong>Legambiente Piemonte e Valle
            d'Aosta</strong> </a>
        e
        <a href="https://www.mercatocircolare.it"><strong>Mercato
            Circolare</strong></a> Srl -
        Società Benefit sul tema “Sostenibilità ambientale, sociale ed economica”
      </li>
      <li>le esperte <strong>Costanza Agnella</strong> (dottoressa di ricerca in Diritti e Istituzioni presso il
        dipartimento di
        Giurisprudenza dell’Università degli Studi di Torino, tutor della Clinica legale Carcere, diritti fondamentali e
        vulnerabilità sociale) e <strong>Chiara De Robertis</strong> (dottoranda in Diritti e Istituzioni presso il
        dipartimento di
        Giurisprudenza dell’Università degli Studi di Torino) sul tema “Le istituzioni totali”, con particolare
        attenzione all’istituzione carceraria
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-size: 8rem;
  padding-bottom: 2rem;
}

p,
h3,
h1,
h2,
ul {
  max-width: var(--text-width);
}
</style>
