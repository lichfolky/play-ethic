<script setup>
import AwesomeIcon from './icons/AwesomeIcon.vue';
</script>

<template>
    <div class="separator">
        <span class="line"></span>
        <AwesomeIcon />
        <span class="line"></span>
    </div>

</template>

<style scoped>
.line {
    border-bottom: 3px solid var(--color-orange-dark);
    max-width: 250px;
    width: 100%;
}

.line.long {
    max-width: 650px;
    width: 100%;
}


svg {
    fill: var(--color-orange-dark);
    width: 100px;
}

.separator {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>