let currentQuestion = 0;

const questionText = document.querySelector("p");
const options = document.querySelectorAll("input[type='radio']");
const nextButton = document.querySelector("button");

function loadQuestion() {

    questionText.innerHTML = questions[currentQuestion].question;

    for(let i=0;i<4;i++){
        options[i].nextSibling.textContent=" " + questions[currentQuestion].options[i];
        options[i].checked=false;
    }

}

nextButton.addEventListener("click",function(){

    if(currentQuestion<questions.length-1){
        currentQuestion++;
        loadQuestion();
    }else{
        alert("Mock Test Completed");
    }

});

loadQuestion();
