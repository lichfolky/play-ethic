<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const skipLink = ref();

watch(
    () => route.path,
    () => {
        skipLink.value.focus();
    }
);
</script>

<template>
    <ul class="skip-links">
        <li>
            <a href="#main" ref="skipLink"> Skip to main content</a>
        </li>
    </ul>
</template>

<style scoped>
.skip-links {
    white-space: nowrap;
    margin: 0 auto;
    top: 0;
    left: 0;
    z-index: 2;
    position: fixed;
    opacity: 0;
}

li::marker {
    content: "";
}

.skip-links ul li a:focus {
    opacity: 1;
    background-color: white;
    padding: 0.5rem;
    border: 3px solid black;
}
</style>