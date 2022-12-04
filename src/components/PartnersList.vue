<template>
    <div class="partners-list">
        <ul>
            <li>
                <a href="altera.http://www.alteracultura.org/">
                    <img class="altera logo" alt="book" src="@/assets/img/altera-logo.svg" /></a>
            </li>
            <li>
                <a href="https://www.facebook.com/IlFortunaDado/">
                    <img class="fortuna dado" alt="book" src="@/assets/img/fortunadado-logo.png" />
                </a>
            </li>
            <li>
                <a href="https://www.fondazionecrt.it/">
                    <img class="fondazion ctr" alt="book" src="@/assets/img/fondazionecrt-logo.png" />
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
    gap: 50px;
    padding: 0;
}

li::marker {
    content: "";
}

li {
    padding: 0;
}

li img {
    height: 75px;

}
</style>