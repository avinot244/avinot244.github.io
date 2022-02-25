let intervalle = setInterval(workerLoop,10);
function workerLoop() {
    console.log("Création message du worker");
    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 600);
    console.log("envoi du message au script principal");
    this.postMessage([x, y]);
}