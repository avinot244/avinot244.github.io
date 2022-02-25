(function (){
    let time = 0;
    var canvas;
    var ctx;
    
    function mooving () {
        console.log(ctx);
        if (time < 10) {
            ctx.fillStyle = 'green';
            ctx.fillRect(0,0,600,600);
            ctx.fillStyle = 'red';
            ctx.fillRect(time*10,0,50,50);
            time = time+1;
        }else{
            time = 0;
            clearInterval(intervalle);
        }
    }
    
    function main (){
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        let intervalle = setInterval(mooving, 500);
        console.log(ctx);
        
    }
    
    window.addEventListener("DOMContentLoaded", main);
})();

/*setInterval(gameLoop,100);
function gameLoop(){
    tblSquare[10]
    clear();
    update();
    render();
}*/