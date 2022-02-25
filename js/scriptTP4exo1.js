var monWorker;


function main() {
    alert("Hello World");
    if (window.Worker){
        console.log("Création du worker");
        monWorker = new Worker('./worker/workerTP4exo1.js');
        monWorker.onmessage = function(e){
            console.log("Message reçu avec nb = "+e.data[0]);
        }
    }
}

window.addEventListener("DOMContentLoaded", main);