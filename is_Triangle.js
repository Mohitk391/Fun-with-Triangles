// isTriangle Part 

var firstAngle = document.querySelector("#FirstAngle");
var secondAngle = document.querySelector("#SecondAngle");
var thirdAngle = document.querySelector("#ThirdAngle");
var isTriangle = document.querySelector("#btnSubmitOne");
var firstOutput = document.querySelector("#firstOutput");

function is_Triangle(){
    
    var sum = parseInt(firstAngle.value) + parseInt(secondAngle.value) + parseInt(thirdAngle.value);

    if(sum === 180){
        firstOutput.innerText = "It is a Triangle.";
    }
    else {
        firstOutput.innerText = "It is not a Triangle. (Hint: Sum of all three angles of a triangle is 180°)";
    }
}

isTriangle.addEventListener("click", is_Triangle);


