<script setup>
// import mosca from '@/assets/img/giuria/mosca.png'; // => or relative path

let giuria = [
    { nome: "Maresa Bertolo", titolo: "Politecnico di Milano, Dipartimento di Design" }
    , { nome: "Matteo Bisanti", titolo: "GAME Science Research Center" }
    , { nome: "Nicola Degobbis", titolo: "Need Games" }
    , { nome: "Gianmarco Giuliana", titolo: "Ricercatore in game studies Unito", descr: "", photo: "" }
    , { nome: "Giulia 'Jay' Grandi", titolo: "Master di precedenti edizioni di Play Ethic, ex campionessa delle Ruolimpiadi", descr: "", photo: "" }
    , { nome: "Dario Leccacorvi", titolo: "Editore Aristea Edizioni", descr: "", photo: "" }
    , { nome: "Andrea Ligabue", titolo: "PLAY - Festival del Gioco, GAME Science Research Center", descr: "", photo: "" }
    , { nome: "Mauro Longo", titolo: "Scrittore fantasy, autore di giochi di ruolo e libri game", descr: "", photo: "" }
    , { nome: "Marco Mengoli", titolo: "GAME Science Research Center", descr: "", photo: "" }
    , { nome: "Vincenzo Mollica", titolo: "Scrittore fantasy, autore di giochi", descr: "", photo: "" }
    , { nome: "Erika Santin", titolo: "Lucca Comics&Games, Game Science Research Center", descr: "", photo: "" }
    , { nome: "Andrea Sfiligoi", titolo: "Game designer", descr: "", photo: "" }
    , { nome: "Chiara Tirabasso", titolo: "Master di precedenti edizioni di Play Ethic, Terre Spezzate", descr: "", photo: "" }
];

</script>

<template>
    <ul class="giuria">
        <li v-for="(persona, index) of giuria" :key="index">
            <strong>{{ persona.nome }}</strong>
            <em>{{ persona.titolo }}</em>
            <!-- <div class="persona">
                <div class="photo">
                    <img :src="persona.photo" :alt="persona.nome + ' profile'">
                </div>
                <div class="descr">
                    <p>{{ persona.descr }}</p>
                </div>
            </div> -->
        </li>
    </ul>
</template>

<style scoped>
li::marker {
    content: "- ";
}

li {
    padding: 0.5rem;
}

.persona {
    display: flex;
    gap: 2rem;
    padding: 1rem 0;
}

.persona img {
    width: 150px;
    height: 150px;
    flex: 0 0 auto;
}

strong {
    display: block;
    font-weight: 900;
}
</style>

