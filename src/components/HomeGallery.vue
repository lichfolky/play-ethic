<script setup>

</script>

<template>
    <aside class="desktop">
        <picture>
            <source media="(max-width: 1270px)" srcset="@/assets/img/photos/players.png" width="400" />
            <img alt="players" src="@/assets/img/photos/players.png" width="500" />
        </picture>
        <picture>
            <source media="(max-width: 1270px)" srcset="@/assets/img/photos/conference.png" width="400" />
            <img id="bellaciao" alt="conference" src="@/assets/img/photos/conference.png" width="500" />
        </picture>
    </aside>
</template>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 3rem;
}
</style>
