<template>
    <section class="partners-list">
        <div class="row">
            <div>
                <h3>Realizzato da</h3>
                <ul>
                    <li>
                        <a href="https://www.alteracultura.org/">
                            <picture>
                                <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/altera-logo.svg" width="75"
                                    height="60" />
                                <img alt="altera logo" src="@/assets/img/loghi/altera-logo.svg" width="100" height="100" />
                            </picture>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/IlFortunaDado/">
                            <picture>
                                <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/fortunadado-logo.png"
                                    height="50" width="50" />
                                <img alt="fortuna dado logo" src="@/assets/img/loghi/fortunadado-logo.png" width="100"
                                    height="100" />
                            </picture>

                        </a>
                    </li>
                    <li>
                        <a href="https://www.toplaytorino.it/">
                            <picture>
                                <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-toplay.png" width="50"
                                    height="50" />
                                <img alt="toplay" src="@/assets/img/loghi/Logo-toplay.png" width="100" height="100" />
                            </picture>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Con il contributo di</h3>
                <ul>
                    <li>
                        <a href="https://www.fondazionecrt.it/">
                            <picture id="fondazione">
                                <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/fondazionecrt-logo.png"
                                    height="50" width="150" />
                                <img alt="fondazione crt logo" src="@/assets/img/loghi/fondazionecrt-logo.png" height="75"
                                    width="100" />
                            </picture>

                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <h3>Con il patrocinio di</h3>
        <ul>
            <li>
                <a href="https://gamescience.imtlucca.it/game-sci-re-center">
                    <picture>
                        <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-GSRC.png" width="40"
                            height="40" />
                        <img alt="GAME Science Research Center" src="@/assets/img/loghi/Logo-GSRC.png" width="75"
                            height="75" />
                    </picture>
                </a>
            </li>
            <li>
                <a href="https://www.luccacomicsandgames.com/it/">
                    <picture>
                        <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-lucca-comics.png" width="50"
                            height="50" />
                        <img alt="Lucca Comics & Games" src="@/assets/img/loghi/Logo-lucca-comics.png" width="100"
                            height="100" />
                    </picture>
                </a>
            </li>
            <li>
                <a href="https://www.play-modena.it/">
                    <picture>
                        <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-Play-Modena.png" width="50"
                            height="50" />
                        <img alt="Play modena" src="@/assets/img/loghi/Logo-Play-Modena.png" width="100" height="100" />
                    </picture>
                </a>
            </li>
        </ul>
        <h3>In collaborazione con</h3>
        <ul>
            <li>
                <a href="https://www.cifaong.it/">
                    <picture>
                        <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-CIFA.png" width="50"
                            height="50" />
                        <img alt="cifa ong" src="@/assets/img/loghi/Logo-CIFA.png" width="100" height="100" />
                    </picture>
                </a>
            </li>

            <li>
                <a href="https://www.gioseftorino.eu/">
                    <picture>
                        <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-giosef.jpg" width="50"
                            height="50" />
                        <img alt="Giosef Torino" src="@/assets/img/loghi/Logo-giosef.jpg" width="100" height="100" />
                    </picture>
                </a>
            </li>
            <li>
                <a href="https://www.legambientepiemonte.it/">
                    <picture>
                        <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-legambiente.png" width="50"
                            height="50" />
                        <img alt="Legambiente Piemonte e Valle d’Aosta" src="@/assets/img/loghi/Logo-legambiente.png"
                            width="100" height="100" />
                    </picture>
                </a>
            </li>



            <li>
                <a href="https://www.mercatocircolare.it/">
                    <picture>
                        <source media="(max-width: 1000px)" srcset="@/assets/img/loghi/Logo-MC.png" width="35"
                            height="35" />
                        <img alt="mercato circolare" src="@/assets/img/loghi/Logo-MC.png" width="70" height="70" />
                    </picture>
                </a>
            </li>

        </ul>

    </section>
</template>

<style scoped>
section.partners-list {
    background-color: var(--color-white);
    margin-top: 3rem;
    padding-bottom: 4rem;
}

.row {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

h3 {
    text-align: center;
    margin: 0 auto;
}

ul {
    display: flex;
    padding: 1.5rem 0 2rem 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
    align-items: center;
    max-width: 100%;
}

li::marker {
    content: "";
}

li {
    padding: 0;
}
</style>