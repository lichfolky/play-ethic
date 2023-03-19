<template>
    <aside class="desktop">



        <picture>
            <source type="image/avif"
                srcset="@/assets/img/photos/image-1h.avif 1x, @/assets/img/photos/image-1h@2x.avif 2x" />
            <img alt="Giocatori e esperti di game design entusiasti e sorridenti" src="@/assets/img/photos/image-1h.jpg" />
        </picture>
        <picture>
            <source type="image/avif"
                srcset="@/assets/img/photos/image-2h.avif 1x, @/assets/img/photos/image-2h@2x.avif 2x" />
            <img alt="Giocatori e esperti di game design entusiasti e sorridenti" src="@/assets/img/photos/image-2h.jpg" />
        </picture>


        <!-- 
        <picture>
            <source media="(max-width: 1270px)" srcset="@/assets/img/photos/players.png" width="400" />
            <img alt="players" src="@/assets/img/photos/players.png" width="500" />
        </picture>
                                        <picture>
                                            <source media="(max-width: 1270px)" srcset="@/assets/img/photos/conference.png" width="400" />
                                            <img id="bellaciao" alt="conference" src="@/assets/img/photos/conference.png" width="500" />
                                        </picture> -->
    </aside>
</template>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>
