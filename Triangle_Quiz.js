// Triangle Quiz Part

var firstResponse = document.querySelector("#ninety");
var secondResponse = document.querySelector("#Right-Angled");
var thirdResponse = document.querySelector("#one-right");
var fourthResponse = document.querySelector("#obtuse_fourth");
var fifthResponse = document.querySelector("#isosceles");
var triangleQuiz = document.querySelector("#btnSubmitTwo");
var secondOutput = document.querySelector("#secondOutput");

var totalPoints = 0;

function countResponses(){
    if(firstResponse.checked == true){
        totalPoints++;
    }
    if(secondResponse.checked == true){
        totalPoints++;
    }
    if(thirdResponse.checked == true){
        totalPoints++;
    }
    if(fourthResponse.checked == true){
        totalPoints++;
    }
    if(fifthResponse.checked == true){
        totalPoints++;
    }
    secondOutput.innerText = "You have got " + totalPoints + " responses correct..!!";
}

triangleQuiz.addEventListener("click", countResponses);