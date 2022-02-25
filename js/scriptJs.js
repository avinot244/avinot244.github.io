function coucou () {
    alert("Hello World");
}

function init () {
    const button = document.getElementById("play");
    button.addEventListener("click", coucou);
}
window.addEventListener("onload", coucou);
window.addEventListener("DOMContentLoaded", init);

