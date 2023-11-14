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