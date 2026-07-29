// alert("Js connected successfully");
const answerList = document.querySelector(".multichoice");
const scoreBoard = document.getElementById("score-counter");
const questionBoard= document.getElementById("question-counter");
const Result = document.getElementById("result");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".startBtn");
const questionH3= document.getElementById("question");
const btnControl = document.querySelector(".btnControl");
const nextButton =document.querySelector(".nextBtn");
const prevButton =document.querySelector(".prevBtn");

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
// Empty State
let currentQuestion = 0; 
let scores =0; 
let selected = false;
// Start Game
startBtn.addEventListener("click", ()=>{
    if(startBtn.textContent === "Play Again"){
        Reset();
    }
        clearStartBtn();
     // Using sort to shuffle the questions so it can appear random on each start iteration
     questionList.sort(() => Math.random() - 0.5);
     currentQuestion= 0;
    displayQuestion();
})
// Function to display question once startBtn is clicked
function displayQuestion(){
    const current= questionList[currentQuestion];
questionH3.textContent =current.question;
answerList.textContent="";
current.options.forEach((option,index) => {
        const listItem = document.createElement("li");
        listItem.append(option);
        answerList.appendChild(listItem);

    
});
const questionCounter =`${currentQuestion + 1} of ${questionList.length}`;
questionBoard.textContent=questionCounter;
}
// Checking for Answers
answerList.addEventListener("click", (e)=>{   
    checkAnswer(e);
    }
    
);
function checkAnswer(e){
    // The first line is because somehow the whole container gets highlighted 
      if (e.target.tagName !== "LI") return;
    if(selected) return;
     selected= true;
    const current = questionList[currentQuestion];
    // answer checking goes here
    if(e.target.textContent === current.answer){
        e.target.style.backgroundColor ="green";
       scores++;
             scoreBoard.textContent = scores;
        
    }else{
        e.target.style.backgroundColor ="red";
      Result.textContent= `Correct Answer: ${current.answer}`;
    }

//    This code prevents users from being able to select another option
    const allAnswers = answerList.querySelectorAll("li");
    allAnswers.forEach((answer, index)=>{
        if(answer.textContent === current.answer){
            answer.style.backgroundColor = "green";
        
             
        }else{
        
              
        }
        
    });
    console.log(e.target);
console.log(e.target.tagName);
}
    
// Next Button
nextButton.addEventListener("click",(e)=>{
    if (selected === false){
        alert("Please attempt to answer the current question first");
        return;
    }
    if(currentQuestion < questionList.length-1){
         currentQuestion++;
         selected= false;
         Result.textContent="";
         displayQuestion();
    }
   else{
     questionH3.textContent = " Quiz Complete!";
    answerList.textContent = "";
    Result.textContent = `You scored ${scores} out of ${questionList.length}`;
    playAgain();
        // alert("No more question");
   }
   
    
});
// Previous Button
prevButton.addEventListener("click",(e)=>{
    if(currentQuestion > 0){
         currentQuestion--;
         selected= false;
         Result.textContent="";
         displayQuestion();
    }
   else{
   
        alert("No Previous Question");
   }
   
    
});
// Reset button function
function Reset (){
    scores =0;
    currentQuestion =0;
    selected= false;
scoreBoard.textContent ="0";
Result.textContent= "";
displayQuestion();

}
resetBtn.addEventListener("click",Reset);

// Function to clear the question section once start is clicked
function clearStartBtn (){
startBtn.classList.add("hide");
btnControl.classList.remove("hide");
}
// Function to remove Prev and Next buttons at the end of the game and put a Play Again buttom
function playAgain(){
btnControl.classList.add("hide");
startBtn.textContent="Play Again"
startBtn.classList.remove("hide");
}

// Adding event Listener to the Start button to stop the demo and move to the game

// Function to check answer that way it can be called into the event listener


