<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink class="title" to="/">PLAY ETHIC!</RouterLink>
      <RouterLink to="/call">Call for adventures!</RouterLink>
      <RouterLink to="/avventure">Le avventure</RouterLink>
      <RouterLink to="/giuria">La giuria</RouterLink>
      <RouterLink to="/eventi">Gli eventi</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer>
    <div class="wrap">
      <a href="/">Altera</a>
    </div>
  </footer>
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
  display: flex;
  gap: 1.5rem;
  align-items: center;
  height: var(--nav-height);
  padding: var(--page-padding);
  margin: var(--page-margin);
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

footer {
  background-color: var(--color-nav-background);
  color: var(--color-text-nav);
  height: 3rem;
  padding: var(--page-padding);
  display: flex;
  align-items: center;
}

footer .wrap {
  max-width: var(--page-width);
  padding: var(--page-padding);
  gap: 1.5rem;
  height: var(--nav-height)
}

footer a {
  color: var(--color-link--hover);
  text-decoration: none;
}

footer a:hover {
  color: var(--color-link);
}
</style>
