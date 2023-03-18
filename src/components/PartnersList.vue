<template>
    <section class="partners-list">
        <div class="logo-list-wrapper">
            <h3 class="logo-list-title">Realizzato da</h3>
            <div class="logo-list">

                <a href="http://www.alteracultura.org/">
                    <picture>
                        <img alt="altera logo" src="@/assets/img/loghi/altera-logo.svg" />
                    </picture>
                </a>

                <a href="https://www.facebook.com/IlFortunaDado/">
                    <picture>
                        <img alt="fortuna dado logo" src="@/assets/img/loghi/fortunadado-logo.png" />
                    </picture>
                </a>

                <a href="https://www.toplaytorino.it/">
                    <picture>
                        <img alt="toplay" src="@/assets/img/loghi/Logo-toplay.png" />
                    </picture>
                </a>
            </div>

        </div>
        <div class="logo-list-wrapper">
            <h3 class="logo-list-title">Con il contributo di</h3>
            <div class="logo-list">
                <a href="https://www.fondazionecrt.it/">
                    <picture id="fondazione">
                        <img class="long" alt="fondazione crt logo" src="@/assets/img/loghi/fondazionecrt-logo.png"
                            width="250" />
                    </picture>
                </a>
            </div>
        </div>
        <div class="logo-list-wrapper">
            <h3 class="logo-list-title"> Con il patrocinio di</h3>

            <div class="logo-list">

                <a href="https://gamescience.imtlucca.it/game-sci-re-center">
                    <picture>
                        <img alt="GAME Science Research Center" src="@/assets/img/loghi/Logo-GSRC.png" height="80" />
                    </picture>
                </a>

                <a href="https://www.luccacomicsandgames.com/it/">
                    <picture>

                        <img alt="Lucca Comics & Games" src="@/assets/img/loghi/Logo-lucca-comics.png" />
                    </picture>
                </a>

                <a href="https://www.play-modena.it/">
                    <picture>

                        <img alt="Play modena" src="@/assets/img/loghi/Logo-Play-Modena.png" />
                    </picture>
                </a>

            </div>
        </div>
        <div class="logo-list-wrapper">
            <h3 class="logo-list-title">In collaborazione con</h3>
            <div class="logo-list">
                <a href="https://www.cifaong.it/">
                    <picture>
                        <img alt="cifa ong" src="@/assets/img/loghi/Logo-CIFA.png" />
                    </picture>
                </a>

                <a href="https://www.gioseftorino.eu/">
                    <picture>
                        <img alt="Giosef Torino" src="@/assets/img/loghi/Logo-giosef.jpg" />
                    </picture>
                </a>

                <a href="http://www.legambientepiemonte.it/">
                    <picture>
                        <img alt="Legambiente Piemonte e Valle d’Aosta" src="@/assets/img/loghi/Logo-legambiente.png" />
                    </picture>
                </a>

                <a href="https://www.mercatocircolare.it/">
                    <picture>
                        <img alt="mercato circolare" src="@/assets/img/loghi/Logo-MC.png" height="70" />
                    </picture>
                </a>

            </div>

        </div>

    </section>
</template>

<style scoped>
.partners-list {
    background-color: var(--color-white);
    max-width: var(--page-max-width);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 2rem;
    gap: 3rem;
}

@media (max-width: 1000px) {
    .partners-list {
        display: flex;
        flex-direction: column;
    }

}

.logo-list-wrapper {
    text-align: center;
}

.logo-list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    height: 100px;
}



.logo-list img:not([width], [height]) {
    object-fit: contain;
    height: 100px;
    width: 100px;
}
</style>