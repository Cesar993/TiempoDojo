
function informe() {
    alert("Loading weather report...");
}

var cookie = document.querySelector(".cookie");
function borrar() {
    cookie.remove();
}

var far = document.querySelector(".red");
var far1 = document.querySelector(".red1");
var far2 = document.querySelector(".red2");
var far3 = document.querySelector(".red3");

var fBlue = document.querySelector(".blue");
var fBlue1 = document.querySelector(".blue1");
var fBlue2 = document.querySelector(".blue2");
var fBlue3 = document.querySelector(".blue3");


function chan(element) {

    if (element.value == "°F") {
        far.innerText = "167°";
        far1.innerText = "176";
        far2.innerText = "156.2";
        far3.innerText = "172.4";
        
        fBlue.innerText = "149";
        fBlue1.innerText = "150.8";
        fBlue2.innerText = "141.8";
        fBlue3.innerText = "158";

    }
    else if (element.value == "°C") {
        far.innerText = "75";
        far1.innerText = "80";
        far2.innerText = "69";
        far3.innerText = "78";

        fBlue.innerText = "65";
        fBlue1.innerText = "66";
        fBlue2.innerText = "61";
        fBlue3.innerText = "70";
    }

}
