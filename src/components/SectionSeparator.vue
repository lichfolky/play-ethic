<script setup>

import { computed } from 'vue';
const props = defineProps({
    imgName: String,
});
const imgUrl = computed(() => {
    if (props.imgName) {
        return new URL(`../assets/img/${props.imgName}.svg`, import.meta.url).href;
    }
});
</script>

<template>
    <div class="separator" v-if="imgUrl">
        <span class="line"></span>

        <img :src="imgUrl" alt="separator icon" width="100px">

        <span class="line"></span>
    </div>
    <div class="separator" v-else>
        <div class="line long"></div>
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


img {
    padding: 0 1.5rem;
    width: 100px;
}

.separator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}
</style>