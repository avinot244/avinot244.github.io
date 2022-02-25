let intervalle = setInterval(workerLoop,1000);
function workerLoop() {
    console.log("Création message du worker");
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    console.log("envoi du message au script principal");
    this.postMessage([x, y]);
}