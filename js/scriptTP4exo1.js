function main() {
    alert("Hello World");
    if (window.Worker){
        console.log("Création du worker");
        var monWorker = new Worker("workerTP4exo1.js");
        console.log("coucou");
        monWorker.onmessage = function(e){
            console.log("Message reçu avec x = "+e.data[0]+" et y = "+e.data[1]);
        }
    }
}

window.addEventListener("DOMContentLoaded", main);