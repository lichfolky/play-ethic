
<template>
    <footer>
        <div class="wrap">
            <a href="http://www.alteracultura.org/">Altera c/o CasArcobaleno - Via Bernardino Lanino 3/A, 10152
                Torino</a>
        </div>
    </footer>
</template>

<style>
footer {
    background-color: var(--color-nav-background);
    color: var(--color-text-nav);
    height: 3rem;

    padding-left: var(--page-padding-inline);
    padding-right: var(--page-padding-inline);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--nav-height)
}

footer .wrap {
    max-width: var(--page-width);
    padding: var(--page-padding);
    gap: 1.5rem;
}

footer a {
    color: var(--color-link--hover);
    text-decoration: none;
}

footer a:hover {
    color: var(--color-link);
}
</style>