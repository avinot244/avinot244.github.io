let time = 10;
let intervalle = setInterval(tictac, 500);  

function tictac () {
    let compteur = document.getElementById('compteur');
    if (time > 0){
        compteur.textContent = time;
        time = time-1;
        
    }else{
        clearInterval(intervalle)
        compteur.textContent = "EXPLOSION";
        time = 10;
        intervalle = setInterval(tictac, 500);
    }    
}

window.addEventListener("DOMContentLoaded", main);