// area Part

var base = document.querySelector("#base");
var height = document.querySelector("#height");
var area = document.querySelector("#btnSubmitFourth");
var fourthOutput = document.querySelector("#output");

function calculateArea(){
    var area = 0.5 * (parseInt(base.value)) * (parseInt(height.value));
    fourthOutput.innerText = "Area of the triangle is: "+area;
}

area.addEventListener("click", calculateArea);