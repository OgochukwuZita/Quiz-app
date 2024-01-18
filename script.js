'use strict';

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click',startQuiz)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion();
})

function startQuiz(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random()- 0.5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizScore=0
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
    questionElement.innerText = shuffledQuestions[currentQuestionIndex].question;
    shuffledQuestions[currentQuestionIndex].answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    if (selectedButton.dataset.correct === "true") {
        quizScore++;
    }
    document.getElementById('right-answers').innerText = quizScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
// array of questions
const questions = [
    {
        question: 'Which of these is a JavaScript framework?',
        answers: [
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: false},
            {text: 'Eclipse', correct: false},
        ],
    },
    {
        question: 'What is the primary purpose of JavaScript?',
        answers: [
            { text: 'Styling web pages', correct: false },
            { text: 'Creating interactive web pages', correct: true },
            { text: 'Database management', correct: false },
            { text: 'Server-side scripting', correct: false },
        ],
    },
    {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        answers: [
            { text: 'var', correct: true },
            { text: 'let', correct: false },
            { text: 'const', correct: false },
            { text: 'variable', correct: false },
        ],
    },
     {
        question: 'What is the purpose of the "document.getElementById()" method in JavaScript?',
        answers: [
              { text: 'Accessing elements by class', correct: false },
             { text: 'Accessing elements by tag name', correct: false },
            { text: 'Accessing elements by ID', correct: true },
             { text: 'Accessing elements by name', correct: false },
         ],
     },
     {
        question: 'Which operator is used for strict equality in JavaScript?',
         answers: [
             { text: '==', correct: false },
            { text: '===', correct: true },
            { text: '!=', correct: false },
             { text: '!==', correct: false },
         ],
     },
     {
         question: 'What does the "JSON" acronym stand for in JavaScript?',
         answers: [
             { text: 'JavaScript Object Notation', correct: true },
             { text: 'JavaScript Oriented Networks', correct: false },
             { text: 'Java Source Object Notation', correct: false },
             { text: 'JavaScript Object Naming', correct: false },
         ],
     },
     {
         question: 'Which function is used to print output in the console in JavaScript?',
         answers: [
             { text: 'console.log()', correct: true },
             { text: 'print()', correct: false },
             { text: 'log()', correct: false },
             { text: 'output()', correct: false },
         ],
     },
     {
         question: 'What is the purpose of the "addEventListener" method in JavaScript?',
         answers: [
             { text: 'Adding styles to elements', correct: false },
             { text: 'Attaching event handlers to elements', correct: true },
             { text: 'Creating new elements', correct: false },
             { text: 'Animating elements', correct: false },
         ],
     },
     {
         question: 'What is the role of the "localStorage" object in JavaScript?',
         answers: [
             { text: 'Storing session data', correct: false },
             { text: 'Storing data permanently on the server', correct: false },
             { text: 'Storing data permanently on the client-side', correct: true },
             { text: 'Storing temporary data on the client-side', correct: false },
         ],
     },
     {
         question: 'Which of the following is not a valid data type in JavaScript?',
         answers: [
             { text: 'Number', correct: false },
             { text: 'Boolean', correct: false },
             { text: 'Character', correct: true },
             { text: 'String', correct: false },
         ],
     },
     {
         question: 'What does the "typeof" operator return in JavaScript?',
         answers: [
             { text: 'Data type of a variable', correct: true },
             { text: 'Memory address of a variable', correct: false },
             { text: 'Size of a variable', correct: false },
             { text: 'Value of a variable', correct: false },
         ],
     },
     {
         question: 'In JavaScript, what is a closure?',
         answers: [
             { text: 'A way to declare variables', correct: false },
             { text: 'A way to organize code', correct: false },
             { text: 'A function that has access to its own scope, as well as the outer scope', correct: true },
             { text: 'A built-in JavaScript feature', correct: false },
        ],
     },
     {
         question: 'What is the purpose of the "Array.map()" method in JavaScript?',
         answers: [
             { text: 'Iterating over array elements', correct: false },
             { text: 'Filtering array elements', correct: false },
             { text: 'Transforming each array element and creating a new array', correct: true },
             { text: 'Sorting array elements', correct: false },
         ],
     },
     {
         question: 'Which symbol is used for single-line comments in JavaScript?',
         answers: [
             { text: '//', correct: true },
             { text: '/* */', correct: false },
             { text: '--', correct: false },
             { text: '#', correct: false },
         ],
     },
     {
         question: 'What does the "NaN" value represent in JavaScript?',
         answers: [
             { text: 'Not a Number', correct: true },
             { text: 'Negative and Null', correct: false },
             { text: 'No Assignment', correct: false },
             { text: 'Null and Negative', correct: false },
         ],
     },
     {
         question: 'What is the purpose of the "try...catch" statement in JavaScript?',
         answers: [
             { text: 'Declaring variables', correct: false },
             { text: 'Handling errors', correct: true },
             { text: 'Creating loops', correct: false },
             { text: 'Defining functions', correct: false },
         ],
     },
]

// implement timer, total score and correctness pointer 