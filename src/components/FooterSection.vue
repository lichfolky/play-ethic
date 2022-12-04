
<template>
    <footer>
        <div class="wrap">
            <a href="http://www.alteracultura.org/">
                Altera c/o CasArcobaleno - Via Bernardino Lanino 3/A, 10152 Torino</a>
            <div class="copy">
                <small>
                    Play Ethic - 2022
                </small>
                <div>
                    <small>
                        Created by
                    </small>
                    <a href="">
                        Artax
                    </a>
                </div>
            </div>
        </div>
    </footer>

</template>

<style>
footer {
    background-color: var(--color-nav-background);
    color: var(--color-text-nav);
    height: var(--footer-height);
    max-width: var(--page-width);
    padding-left: var(--page-padding-inline);
    padding-right: var(--page-padding-inline);
    padding-top: 1rem;

    margin: 0 auto;
}

footer .wrap {
    max-width: var(--page-width);
    padding: var(--page-padding);
    gap: 1.5rem;
}

footer a {
    color: var(--color-white);
    text-decoration: none;
    font-weight: 700;
}

.copy {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 1rem 0;
}

small {
    font-size: 0.8rem;
}
</style>