// area Part

var base = document.querySelector("#base");
var height = document.querySelector("#height");
var area = document.querySelector("#btnSubmitFourth");
var fourthOutput = document.querySelector("#output");

base.onkeydown = function(e) {
    if(!((e.keyCode > 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
        return false;
    }
}

height.onkeydown = function(e) {
    if(!((e.keyCode > 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
        return false;
    }
}

function calculateArea(){
    var area = 0.5 * (parseInt(base.value)) * (parseInt(height.value));
    fourthOutput.innerText = "Area of the triangle is: "+area;
}

area.addEventListener("click", calculateArea);