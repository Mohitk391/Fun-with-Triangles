// hypotenuse Part

var length = document.querySelector("#length");
var breadth = document.querySelector("#breadth");
var hypotenuse = document.querySelector("#btnSubmitThree");
var thirdOutput = document.querySelector("#output");

length.onkeydown = function(e) {
    if(!((e.keyCode > 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
        return false;
    }
}

breadth.onkeydown = function(e) {
    if(!((e.keyCode > 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
        return false;
    }
}

height.onkeydown = function(e) {
    if(!((e.keyCode > 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
        return false;
    }
}

function calculateHypotenuse(){
    var l = parseInt(length.value);
    var b = parseInt(breadth.value);
    var sum = Math.pow(l,2) + Math.pow(b,2);     
    var hypo = Math.sqrt(sum);
    thirdOutput.innerText = "Your Hypotenuse is: "+ hypo;
}

hypotenuse.addEventListener("click",calculateHypotenuse);