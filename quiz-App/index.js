const questions = [
    {
        question: "Which is largest animal in the world?",
        answer: [
            {
                text: "shark", correct: false
            },
            {
                text: "Blue Whale", correct: true
            },
            {
                text: "Elephant", correct: false
            },
            {
                text: "Giraffe", correct: false
            }
        ],
        
    },
    {
        question: "Which is  smallest country in the world?",
        answer: [
            {
                text: "Vatican City", correct: true
            },
            {
                text: "Bhutan", correct: true
            },
            {
                text: "Nepal", correct: false
            },
            {
                text: "Shri Lanka", correct: false
            }
        ],
        
    },
    {
        question: "Which is largest desert in the world?",
        answer: [
            {
                text: "Kalahari", correct: false
            },
            {
                text: "Gobi", correct: true
            },
            {
                text: "Sahara", correct: true
            },
            {
                text: "Antartica", correct: false
            }
        ],
        
    },
    {
        question: "Which is Smallest continent in the world?",
        answer: [
            {
                text: "Asia", correct: false
            },
            {
                text: "Australia", correct: true
            },
            {
                text: "Arctic", correct: false
            },
            {
                text: "Africa", correct: false
            }
        ],
        
    }
]

const questionElement=document.getElementById("question");
const answerButon=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButon.appendChild(button);
    })
}

startQuiz();