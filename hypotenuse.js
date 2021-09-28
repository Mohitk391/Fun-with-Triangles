// hypotenuse Part

var length = document.querySelector("#length");
var breadth = document.querySelector("#breadth");
var hypotenuse = document.querySelector("#btnSubmitThree");
var thirdOutput = document.querySelector("#output");

function calculateHypotenuse(){
    var l = parseInt(length.value);
    var b = parseInt(breadth.value);
    var sum = Math.pow(l,2) + Math.pow(b,2);     
    var hypo = Math.sqrt(sum);
    thirdOutput.innerText = "Your Hypotenuse is: "+ hypo;
}

hypotenuse.addEventListener("click",calculateHypotenuse);