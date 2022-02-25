let time = 0;
var canvas;
var ctx;
let tblCircle = []

class Circle {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    setX (x) {this.x = x}
    setY (y) {this.y = y}
    getX () {return this.x}
    getY () {return this.y}

    renderCircle () {
        console.log(this.x);
        console.log(this.y);
        ctx.beginPath();
        ctx.arc(this.getX()+10, this.getY()+10, 10, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function init () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    let intervalle = setInterval(gameLoop,1);
}


function update () {
    if (time < 2000) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == XMLHttpRequest.DONE) {
                let coo = JSON.parse(request.responseText);
                let temp = new Circle(coo.x, coo.y);
                temp.renderCircle();
            }
        }
        request.open("GET","https://stwom.herokuapp.com/"+600, true)
        request.send();
        time = time + 1;
    }
}

function gameLoop () {
    update();
}

function main () {
    init();
}

window.addEventListener("DOMContentLoaded", main);