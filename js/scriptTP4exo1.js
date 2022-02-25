function main() {
    alert("Hello World");
    if (window.Worker){
        console.log("Création du worker");
        var monWorker = new Worker("../js/worker/workerTP4exo1.js");
        console.log("coucou");
        monWorker.onmessage = function(e){
            console.log("Message reçu avec nb = "+e.data[0]);
        }
    }
}

window.addEventListener("DOMContentLoaded", main);