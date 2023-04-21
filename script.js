function abrir_modal() { 
    let modal = document.querySelector(".calendly-inline-widget")
    let janela__escura = document.querySelector(".janela__escura")

    modal.style.visibility = "visible"
    janela__escura.style.visibility = "visible"
}

function fechar_modal() {
    let modal = document.querySelector(".calendly-inline-widget")
    let janela__escura = document.querySelector(".janela__escura")

    modal.style.visibility = "hidden"
    janela__escura.style.visibility = "hidden"
}


/* scrollreveal */

let tempo__delay = 500

window.sr = ScrollReveal({reset: true})

/* efeito serviços */
        /* box cortes e descrição */
sr.reveal('.cortes1', {
    delay: tempo__delay,
    origin: "left",
    distance: "100px"
});

sr.reveal('.cortes2', {
    delay: tempo__delay,
    origin: "top",
    distance: "85px"
});

sr.reveal('.cortes3', {
    delay: tempo__delay,
    origin: "right",
    distance: "300px"
});

sr.reveal('.cortes4', {
    delay: tempo__delay,
    origin: "left",
    distance: "100px"
});

sr.reveal('.cortes5', {
    delay: tempo__delay,
    origin: "bottom",
    distance: "85px"
});

sr.reveal('.cortes6', {
    delay: tempo__delay,
    origin: "right",
    distance: "300px"
});
        /* Tabela de preços e botão */

sr.reveal('.servicos__info', {
    delay: tempo__delay,
    origin: "top",
    distance: "50px"
});

sr.reveal('.servicos__info__botao__button', {
    delay: tempo__delay,
    origin: "bottom",
    distance: "50px"
});

/* efeito endereço */

sr.reveal('.localizacao__endereco', {
    delay: tempo__delay,
    origin: "left",
    distance: "100px"
});

sr.reveal('.localizacao__api', {
    delay: tempo__delay,
    origin: "right",
    distance: "100px"
});

/* efeito sobre */

sr.reveal('.sobre__conteudo__artigo', {
    delay: tempo__delay,
    origin: "bottom",
    distance: "80px"
})

sr.reveal('.imagem__barbeiro', {
    delay: tempo__delay,
    origin: "top",
    distance: "80px"
})

/* efeito contatos */

sr.reveal('.fale__comigo__info', {
    delay: tempo__delay,
    origin: "left",
    distance: "80px"
})