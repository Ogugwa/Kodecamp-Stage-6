// alert("Js connected successfully");
const answerList = document.querySelector(".multichoice");
const scoreBoard = document.getElementById("score-counter");
const questionBoard= document.getElementById("question-counter");
const Result = document.getElementById("result");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".startBtn");
const questionH3= document.getElementById("question");
const btnControl = document.querySelector(".btnControl");
const answerReset =answerList.querySelectorAll("li");
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
    scores =0;
    selected= false;
questionBoard.textContent ="0 of 0";
scoreBoard.textContent ="0";
Result.textContent= "";
answerReset.forEach(answer =>{
 answer.style.backgroundColor = "";
 answerList.style.pointerEvents = "auto";
 if (questionH3.textContent === "" && answerList.textContent === "") {
    window.location.reload();
}
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
    },
    {
        question:"Which is the largest ocean on Earth?",
        options:[
            "Atlantic Ocean",
            "Pacific Ocean",
            "Indian Ocean",
            "Arctic Ocean",
        ],
        answer: "Pacific Ocean",
    },
    {
        question: "How many continents are there?",
        options:[
            "5",
            "6",
            "7",
            "8",
        ],
        answer: "7",
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options:[
            "Tiger",
            "Leopard",
            "Lion",
            "Cheetah",
        ],
        answer: "Lion",
    },
    {
        question:"What is the capital city of Canada?",
        options:[
            "Toronto",
            "Vancouver",
            "Montreal",
            "Ottawa",
        ],
        answer: "Ottawa",
    },
    {
        question:"Which gas do humans breathe in to survive?",
        options:[
            "Carbon Dioxide",
            "Oxygen",
            "Nitrogen",
            "Hydrogen",
        ],
        answer: "Oxygen",
    },
    {
        question:"Which instrument measures temperature?",
        options:[
            "Barometer",
            "Thermometer",
            "Speedometer",
            "Hygrometer",
        ],
        answer: "Thermometer",
    }
];
let currentQuestion = 0;

// Function to clear the question section once start is clicked
function clear (){
startBtn.classList ="hide";
btnControl.classList.remove("hide");
}
// Function to display question once startBtn is clicked
function displayQuestion(){
    const current= questionList[currentQuestion];
questionH3.textContent =current.question;
answerReset.forEach((li,index) => {
li.textContent = current.options[index];
    
});
console.log(current);
console.log(questionH3);
console.log(answerReset.length);

}


// Adding event Listener to the Start button to stop the demo and move to the game
startBtn.addEventListener("click", ()=>{
    console.log("Start button clicked");
    Reset();
    setTimeout(clear,500);
    displayQuestion();
})