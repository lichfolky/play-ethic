
<template>
    <footer>
        <div class="wrap">
            <div class="alteraadd">

                <a href="http://www.alteracultura.org/">
                    Altera: c/o CasArcobaleno - Via Bernardino Lanino 3/A, 10152 Torino</a>

            </div>
            <div class="copy">
                <small>
                    Play Ethic
                </small>
                <div>
                    <a href="mailto:info@alteracultura.org">
                        info@alteracultura.org
                    </a>
                </div>
                <div class="artax">
                    <small>
                        Created by


                        <a href="mailto:mattia.folcarelli@gmail.com">
                            Artax
                        </a>
                    </small>
                </div>
            </div>
        </div>
    </footer>

</template>

<style>
.alteraadd {
    text-align: center;
    padding-top: 1rem;
}

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
    align-items: center;
    gap: 1rem;
}

.artax {
    line-height: 1;
    text-align: center;
}
</style>