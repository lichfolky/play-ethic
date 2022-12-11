<script setup>
import mosca from '@/assets/img/giuria/mosca.png'; // => or relative path

let giuria = [
    {
        nome: "Maresa Bertolo", titolo: "GAME Science Research Center", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure, cumque.Quam, delectus optio maxime quo laborum placeat a molestias adipisci reprehenderit iure nostrum fugit possimus illum.Atque maxime dolorum repellat.", photo: mosca
    }
    , { nome: "Matteo Bisanti", titolo: "GAME Science Research Center", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure, cumque.Quam, delectus optio maxime quo laborum placeat a molestias adipisci reprehenderit iure nostrum fugit possimus illum.Atque maxime dolorum repellat.", photo: "" }
    , { nome: "Giulia Grandi", titolo: "Campionessa delle Ruolimpiadi", descr: "", photo: "" }
    , { nome: "Andrea Ligabue", titolo: "GAME Science Research Center, PLAY", descr: "", photo: "" }
    , { nome: "Mauro Longo", titolo: "Autore di giochi di ruolo e libri game", descr: "", photo: "" }
    , { nome: "Andrea Sfiligoi", titolo: "Game designer", descr: "", photo: "" }
    , { nome: "Chiara Tirabasso", titolo: "Game designer, Terre Spezzate", descr: "", photo: "" }
    , { nome: "Gianmarco Giuliana", titolo: "Professore", descr: "", photo: "" }
    , { nome: "Marco Mengoli", titolo: "Professore", descr: "", photo: "" }
    , { nome: "Dario Leccacorvi", titolo: "Editore", descr: "", photo: "" }
    , { nome: "Vincenzo Mollica", titolo: "Autore", descr: "", photo: "" }];

giuria.sort((persona1, persona2) => persona1.nome > persona2.nome);
        // <!-- <li>Claudia Pandolfi (fondatrice di Donne, dadi e dati)</li> -->
        // <!-- Umberto Pignatelli - Game Developer at CMON Limited	 -->
        // <!-- Alex Grisafi (master di precedenti edizioni di Play Ethic)	 -->
        // <!-- <li>Nicola Degobbis (NeedGames)	</li> -->


</script>

<template>
    <ul class="giuria">
        <li v-for="[persona, index] of giuria" :key="index">
            <h3>{{ persona.nome }}</h3>
            <em>{{ persona.titolo }}</em>
            <div class="persona">
                <div class="photo">
                    <img :src="persona.photo" :alt="persona.nome + ' profile'">
                </div>
                <div class="descr">
                    <p>{{ persona.descr }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped>
li::marker {
    content: "";
}

li {
    padding: 0;
}

.giuria {
    padding: 0;
    max-width: 100%;
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
</style>

