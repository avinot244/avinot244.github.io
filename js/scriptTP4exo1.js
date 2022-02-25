function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    if (window.Worker){
        console.log("Création du worker");
        var monWorker = new Worker("workerTP4exo1.js");
        monWorker.onmessage = function(e){
            console.log("Message reçu avec x = "+e.data[0]+" et y = "+e.data[1]);
            ctx.beginPath();
            ctx.arc(e.data[0], e.data[1],10,0,2*Math.PI);
            ctx.stroke();
        }
    }
}

window.addEventListener("DOMContentLoaded", main);