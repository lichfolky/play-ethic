<script setup>
import { ref } from 'vue';

import { RouterLink } from 'vue-router';
import DiceHamburger from './icons/DiceHamburger.vue';
let showMenu = ref(false);
</script>

<template>
    <div class="top-call">
        Partecipa alla nuova <a href="https://drive.google.com/file/d/1Bmx2idwzdmvJPQDXNJnqhlBDzkl63rXC/view?usp=sharing"
            target=”_blank”>call for
            adventures!
        </a>
    </div>
    <header>

        <nav class="desktop">
            <ul>
                <li class="title">
                    <RouterLink to="/">PLAY ETHIC!</RouterLink>
                </li>
                <li>
                    <RouterLink to="/call">La call for adventures</RouterLink>
                </li>
                <li>
                    <RouterLink to="/giuria">La giuria</RouterLink>
                </li>
                <li>
                    <RouterLink to="/edizionipassate">La prima edizione</RouterLink>
                </li>

                <!-- 
                                        <li>
                                            <RouterLink to="/eventi">Gli eventi</RouterLink>
                                        </li> -->
            </ul>

        </nav>
        <nav class="mobile">
            <div class="nav-bar">
                <span class="title">
                    <RouterLink to="/">PLAY ETHIC!</RouterLink>
                </span>
                <DiceHamburger class="menu-dice" @click="(showMenu = !showMenu)" />
            </div>
            <ul v-if="showMenu">
                <li>
                    <RouterLink to="/call">La call for adventures</RouterLink>
                </li>
                <li>
                    <RouterLink to="/giuria">La giuria</RouterLink>
                </li>
                <li>
                    <RouterLink to="/edizionipassate">La prima edizione</RouterLink>
                </li>
                <!--
                                        <li>
                                            <RouterLink to="/eventi">Gli eventi</RouterLink>
                                        </li> -->
            </ul>

        </nav>

    </header>
</template>

<style scoped>
.top-call {
    background-color: #000;
    color: var(--color-ochre);
    text-align: center;
    padding: 0.4rem 0;
}

header {
    background-color: var(--color-nav-background);
    color: var(--color-text-nav);
    position: sticky;
    top: 0;
}

header nav {
    max-width: var(--page-width);
    padding-left: var(--page-padding-inline);
    padding-right: var(--page-padding-inline);
    margin: 0 auto;
}

header ul {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    padding: 0;
    list-style: none;
    max-width: var(--page-width);
}

header li {
    list-style: none;
    padding: 0;
}

header li::marker {
    content: "";
}

header a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
}

header a:hover {
    color: var(--color-link--hover);
}

header .title {
    flex: 1;
}

header .title a {
    color: var(--color-text-nav-title);
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: 0.1rem;
}

.nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav.mobile ul {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding-bottom: 1rem;
}

.menu-dice {
    height: 75px;
    width: 75px;
    fill: var(--color-white);
    transform: rotate(-180deg);
}
</style>