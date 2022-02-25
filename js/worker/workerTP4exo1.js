let intervalle = setInterval(workerLoop,1000);
function workerLoop() {
    console.log("Création message du worker");
    var nb = Math.floor(Math.random() * max);
    console.log("envoi du message au script principal");
    this.postMessage(nb);
}