<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <ul>
                <li class="title">
                    <RouterLink to="/">PLAY ETHIC!</RouterLink>
                </li>
                <li>
                    <RouterLink to="/call">Call for adventures!</RouterLink>
                </li>
                <li>
                    <RouterLink to="/avventure">Le avventure passate</RouterLink>
                </li>
                <li>
                    <RouterLink to="/giuria">La giuria</RouterLink>
                </li>
                <li>
                    <RouterLink to="/eventi">Gli eventi</RouterLink>
                </li>
            </ul>

        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: var(--color-nav-background);
    color: var(--color-text-nav);
    position: sticky;
    top: 0;
}

nav {
    max-width: var(--page-width);
    padding-left: var(--page-padding-inline);
    padding-right: var(--page-padding-inline);
    margin: 0 auto;
}

ul {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    padding: 0;
    list-style: none;
    height: var(--nav-height);

    max-width: var(--page-width);
}

nav li {
    list-style: none;
    padding: 0;
}

nav li::marker {
    content: "";
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

ul .title {
    flex: 1;

}

ul .title a {
    color: var(--color-text-nav-title);
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: 0.1rem;
}
</style>