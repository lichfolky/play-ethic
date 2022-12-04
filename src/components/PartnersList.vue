<template>
    <div class="partners-list">
        <ul>
            <li>
                <a href="altera.http://www.alteracultura.org/">

                    <picture>
                        <source media="(max-width: 600px)" srcset="@/assets/img/altera-logo.svg" width="75" />
                        <source media="(max-width: 1270px)" srcset="@/assets/img/altera-logo.svg" width="100" />
                        <img alt="altera logo" src="@/assets/img/altera-logo.svg" width="125" />
                    </picture>
                </a>

            </li>
            <li>
                <a href="https://www.facebook.com/IlFortunaDado/">
                    <picture>
                        <source media="(max-width: 600px)" srcset="@/assets/img/fortunadado-logo.png" width="75" />
                        <source media="(max-width: 1270px)" srcset="@/assets/img/fortunadado-logo.png" width="100" />
                        <img alt="fortuna dado logo" src="@/assets/img/fortunadado-logo.png" width="125" />
                    </picture>

                </a>
            </li>
            <li>
                <a href="https://www.fondazionecrt.it/">
                    <picture>
                        <source media="(max-width: 600px)" srcset="@/assets/img/fondazionecrt-logo.png" height="75" />
                        <source media="(max-width: 1270px)" srcset="@/assets/img/fondazionecrt-logo.png" height="100" />
                        <img alt="fondazione crt logo" src="@/assets/img/fondazionecrt-logo.png" height="125" />
                    </picture>

                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.partners-list {
    background-color: var(--color-white);
    padding-top: 2rem;
    padding-bottom: 2rem;
}

ul {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
    padding: 0;
}

li::marker {
    content: "";
}

li {
    padding: 0;
}
</style>