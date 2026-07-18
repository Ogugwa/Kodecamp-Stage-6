// alert("Js connected successfully");
const answerList = document.querySelector(".multichoice");
const scoreBoard = document.getElementById("score-counter");
const questionBoard= document.getElementById("question-counter");
const Result = document.getElementById("result");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".startBtn");
// Empty State
// Adding event listener to the empty state
let scores =0; 
let selected = false;
answerList.addEventListener("click", (e)=>{
       if (selected) return;
           selected= true;
    questionBoard.textContent= "1 of 1";
    answerList.style.pointerEvents = "none";
       if(e.target.textContent ==="Saturn"){
        e.target.style.backgroundColor ="green";
        scores++;
        scoreBoard.textContent = scores;
    }else{
        e.target.style.backgroundColor ="red";
        Result.textContent= "Answer is Saturn";
    }
    
});

// scoreBoard.textContent = scores;
// Reset button function
function Reset (){
    score =0;
    selected= false;
questionBoard.textContent ="0 of 0";
scoreBoard.textContent ="0";
Result.textContent= "";
const answerReset =answerList.querySelectorAll("li");
answerReset.forEach(answer =>{
 answer.style.backgroundColor = "";
 answerList.style.pointerEvents = "auto";
});

}
resetBtn.addEventListener("click",Reset);
// Creating the array of questions
const questionList =[
      {
        question: "Which planet has the most moons in our solar system?",
        options: [
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune"
        ],
        answer: "Saturn"
    },
    {
        question: "What is the capital of Ghana?",
        options: [
            "Accra",
            "Lagos",
            "Nairobi",
            "Abuja"
        ],
        answer: "Accra"
    },
    {
        question: "Which language runs in the browser?",
        options: [
            "Python",
            "Java",
            "JavaScript",
            "C#"
        ],
        answer: "JavaScript"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options:[
            'Venus',
            "Jupiter",
             "Mars",
            "Mercury"
        ],
        answer: "Mars",
    }
];
let currentQuestion = 0;
// Adding event Listener to the Start button to stop the demo and move to the game
startBtn.addEventListener("click", ()=>{
    console.log("Start button clicked");
})