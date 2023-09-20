
function informe() {
    alert("Loading weather report...");
}

var cookie = document.querySelector(".cookie");
function borrar() {
    cookie.remove();
}


function faren(val) {
    return Math.round(5/9 * (val-32));
}
function cel(val) {
    return Math.round(9/5 * val +32);
}


function chan(element) {

    for (let i = 1; i < 9; i++) {
        var temp = document.querySelector(".valor"+i);
        var valorEntero = parseInt(temp.innerText);

         if (element.value == "°F") {
            temp.innerText = cel(valorEntero) ;
        }
        else if (element.value == "°C") {
            temp.innerText = faren(valorEntero);
        } 
    }

}



