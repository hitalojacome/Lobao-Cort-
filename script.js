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
