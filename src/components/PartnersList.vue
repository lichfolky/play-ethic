<template>
    <section class="partners-list">
        <ul>
            <li>
                <a href="altera.http://www.alteracultura.org/">

                    <picture>
                        <source media="(max-width: 600px)" srcset="@/assets/img/altera-logo.svg" width="75"
                            height="100" />
                        <source media="(max-width: 1270px)" srcset="@/assets/img/altera-logo.svg" width="100"
                            height="100" />
                        <img alt="altera logo" src="@/assets/img/altera-logo.svg" width="150" height="150" />
                    </picture>
                </a>

            </li>
            <li>
                <a href="https://www.facebook.com/IlFortunaDado/">
                    <picture>
                        <source media="(max-width: 600px)" srcset="@/assets/img/fortunadado-logo.png" height="75"
                            width="75" />
                        <source media="(max-width: 1270px)" srcset="@/assets/img/fortunadado-logo.png" height="100"
                            width="100" />
                        <img alt="fortuna dado logo" src="@/assets/img/fortunadado-logo.png" width="150" height="150" />
                    </picture>

                </a>
            </li>
            <li>
                <a href="https://www.fondazionecrt.it/">
                    <picture id="fondazione">
                        <source media="(max-width: 600px)" srcset="@/assets/img/fondazionecrt-logo.png" height="75"
                            width="100" />
                        <source media="(max-width: 1270px)" srcset="@/assets/img/fondazionecrt-logo.png" height="100"
                            width="150" />
                        <img alt="fondazione crt logo" src="@/assets/img/fondazionecrt-logo.png" height="150"
                            width="200" />
                    </picture>

                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped>
section.partners-list {
    background-color: var(--color-white);
    padding-top: 2rem;
    padding-bottom: 2rem;
}

ul {
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
}

#fondazione img {
    max-width: 190px;
}

li::marker {
    content: "";
}

li {
    max-width: 120px;
    padding: 0;
}
</style>