// ! Quiz data in the form of an array of objects
const quizData = [
    {
        question: 'What is the capital of India?',
        options: ['Patna', 'Ranchi', 'Delhi', 'Kolkata'],
        correctAnswer: 'Delhi'
    },
    {

        question: 'Which programming language is known as the "language of the web"?',
        options: ['JavaScript', 'Python', 'Java', 'C++'],
        correctAnswer: 'JavaScript'
    }
    // !      Add more questions as needed
];


let currentQuestionIndex = 0;

// ! Function to load the next question
const loadQuestion = () => {
    const questionContainer = document.getElementById('question-container')
    const optionsContainer = document.getElementById('options-container')
    const currentQuestion = quizData[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    // ! Loop through options and create buttons
    currentQuestion.options.forEach((option, index, array) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', (event) => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

}

// ! Function to check the user's answer
const checkAnswer = (userAnswers) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (userAnswers === currentQuestion.correctAnswer) alert('Correct!');
    else alert('Incorrect. The correct answer is ' + currentQuestion.correctAnswer);

    // ! Move to the next question
    currentQuestionIndex++;

    // ! Check if there are more questions or end the quiz
    if (currentQuestionIndex < quizData.length) loadQuestion();
    else alert('Quiz completed! Thanks for playing.');

}


// ! Function to load the first question when the page loads
window.onload = loadQuestion;
