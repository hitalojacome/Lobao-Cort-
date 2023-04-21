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

let delay__hover = 100
let tempo__delay = 600
let tempo__duration = 800

window.sr = ScrollReveal({reset: true})

/* efeito serviços */
        /* box cortes e descrição */
sr.reveal('.cortes1', {
    delay: delay__hover,
    origin: "left",
    distance: "100px",
    duration: tempo__duration
});

sr.reveal('.cortes2', {
    delay: delay__hover,
    origin: "top",
    distance: "85px",
    duration: tempo__duration
});

sr.reveal('.cortes3', {
    delay: delay__hover,
    origin: "right",
    distance: "300px",
    duration: tempo__duration
});

sr.reveal('.cortes4', {
    delay: delay__hover,
    origin: "left",
    distance: "100px",
    duration: tempo__duration
});

sr.reveal('.cortes5', {
    delay: delay__hover,
    origin: "bottom",
    distance: "85px",
    duration: tempo__duration
});

sr.reveal('.cortes6', {
    delay: delay__hover,
    origin: "right",
    distance: "300px",
    duration: tempo__duration
});
        /* Tabela de preços e botão */

sr.reveal('.servicos__info', {
    delay: tempo__delay,
    origin: "top",
    distance: "50px",
    duration: tempo__duration
});

sr.reveal('.servicos__info__botao__button', {
    delay: tempo__delay,
    origin: "bottom",
    distance: "50px",
    duration: tempo__duration
});

/* efeito endereço */

sr.reveal('.localizacao__endereco', {
    delay: tempo__delay,
    origin: "left",
    distance: "100px",
    duration: tempo__duration
});

sr.reveal('.localizacao__api', {
    delay: tempo__delay,
    origin: "right",
    distance: "100px",
    duration: tempo__duration
});

/* efeito sobre */

sr.reveal('.sobre__conteudo__artigo', {
    delay: tempo__delay,
    origin: "bottom",
    distance: "80px",
    duration: tempo__duration
})

sr.reveal('.imagem__barbeiro', {
    delay: tempo__delay,
    origin: "top",
    distance: "80px",
    duration: tempo__duration
})

/* efeito contatos */

sr.reveal('.fale__comigo__info', {
    delay: tempo__delay,
    origin: "left",
    distance: "80px",
    duration: tempo__duration
})