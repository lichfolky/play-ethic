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
        <img :src="imgUrl" alt="">
        <span class="line"></span>
    </div>
    <div class="separator" v-else>
        <div class="line long"></div>
    </div>
</template>

<style scoped>
.line {
    border-bottom: 3px solid var(--color-orange-dark);
    width: 250px;
}

.line.long {
    width: 650px;
}


img {
    padding: 0 1.5rem;
}

.separator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0 3rem 0;
}
</style>