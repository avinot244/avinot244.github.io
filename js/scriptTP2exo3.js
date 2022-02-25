let time = 0;
var canvas;
var ctx;
let tblRect = [];

class Rectangle {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    setX (x) {this.x = x;}
    setY (y) {this.y = y;}
    getX () {return this.x;}
    getY () {return this.y;}

    updateRect (newX, newY) {
        this.setX(newX);
        this.setY(newY);
    }

    renderRect () {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.getX(),this.getY(), 50, 50);
    }
}

function init () {
    canvas = document.getElementById('canvas'); 
    for (let i = 0 ; i < 2 ; i++) {
        if (i == 0) {
            tblRect.push(new Rectangle(0,0));
        }else{
            tblRect.push(new Rectangle(0,i*50+25));
        }
        
    }
}
function update () {
    if (time < 10) {
        tblRect.forEach(function(item){
            item.updateRect(time*10,item.getY());
        });
        time = time+1;
    }else{
        time = 0;
        clearInterval(intervalle);
        tblRect.forEach(function(item){
            item.updateRect(0,item.getY());
        });
    }
}
function render () {
    
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,600,600);
    tblRect.forEach(function(item){
        item.renderRect();
    })
}
function gameLoop () {
    //debugger;
    /*update*/
    update();
    /*render*/
    render();
    
}
function main () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    init();
    let intervall = setInterval(gameLoop, 500);
    
}


window.addEventListener("DOMContentLoaded",main);