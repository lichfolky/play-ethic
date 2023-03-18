
<template>
    <section>
        <h3 class="newsletter-title">
            Iscriviti alla nostra newsletter
        </h3>
        <div class="newsletter">
            <p class="small">
                Quando partirà la call, riceverai una mail con tutti i dettagli del contest e aggiornamenti sulle
                attività
                di Play Ethic e altre nostre iniziative.
            </p>
            <form id="newsletter-form"
                action="https://alteracutura.us14.list-manage.com/subscribe/post?u=94050c7fdc8ebd7da4094157d&amp;id=227e82f7fb"
                method="post" name="subscribe-form" class="validate" target="_blank">
                <input id="email" type="email" value="" name="email" class="email" placeholder="indirizzo email" required>
                <div style="position: absolute; left: -5000px" aria-hidden="true">
                    <input type="text" name="b_94050c7fdc8ebd7da4094157d_227e82f7fb" tabindex="-1" value="">
                </div>
                <div class="clear">
                    <input type="submit" value="Iscriviti" name="subscribe" class="button">
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
section .newsletter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: var(--text-max-width);
}

.newsletter-title {
    text-align: center;
}

#newsletter-form {
    display: flex;
    padding: 1rem 0;
    height: 4rem;
    flex-wrap: wrap;
    gap: 2rem;
}

.newsletter p {
    flex: 1 0 100%;
}

#newsletter-form .email {
    width: 30ch;
}

#newsletter-form .button {
    min-height: 32px;
}
</style>