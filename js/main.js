function toggleAside() {
    document.getElementsByTagName("aside")[0].classList.toggle("closed")
}
function changeVersion(btn) {
    versions = btn.parentNode.getElementsByTagName("button")
    for (let i = 0; i < versions.length; i++) {
        versions[i].classList.toggle("selected")
        
    }
}
function CheckMessage(input) {
    message = input.value;
    if (message != "") {
        input.parentNode.classList.add("valid")
    } else {
        input.parentNode.classList.remove("valid")
    }
}
function closeAsideMedia() {
    console.log("cambio")
    if (window.innerWidth <= 767 && !(document.getElementsByTagName("aside")[0].classList.contains("closed"))) {
        document.getElementsByTagName("aside")[0].classList.add("closed")
        console.log("cerrar aside")
    }
}

// Verifica el ancho de la pantalla al cargar la página y al cambiar su tamaño
window.onload = closeAsideMedia();
window.onresize = closeAsideMedia();