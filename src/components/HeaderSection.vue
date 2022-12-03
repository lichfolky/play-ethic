<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <RouterLink class="title" to="/">PLAY ETHIC!</RouterLink>
            <RouterLink to="/call">Call for adventures!</RouterLink>
            <RouterLink to="/avventure">Le avventure passate</RouterLink>
            <RouterLink to="/giuria">La giuria</RouterLink>
            <RouterLink to="/eventi">Gli eventi</RouterLink>
        </nav>
    </header>
</template>

<style>
header {
    background-color: var(--color-nav-background);
    color: var(--color-text-nav);
    position: sticky;
    top: 0;
}

nav {
    max-width: var(--page-width);
    display: flex;
    gap: 1.5rem;
    align-items: center;
    height: var(--nav-height);
    padding-left: var(--page-padding-inline);
    padding-right: var(--page-padding-inline);
    margin: 0 auto;
}

nav a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
}

nav a:hover {
    color: var(--color-link--hover);
}

nav .title {
    flex: 1;
    color: var(--color-text-nav-title);
    font-weight: 900;
    font-size: 2rem;

    letter-spacing: 0.1rem;
}
</style>