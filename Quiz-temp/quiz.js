const questions = [
    {
        question: 'Which tag creates a link in HTML?',
        options: ['<link>', '<a>', '<href', '<url>'],
        answer: 1,
    },

    {
        question: 'What tag is used for interactivity on the web page?',
        options: ['<link>', '<a class="button">', '<dialog>', '<button>'],
        answer: 3,
    },
];

let questionNumber = 0;
let score = 0;

const h2Question = document.querySelector('.question-box h2');
const optionList = document.querySelector('.options-box');
const btnOptions = document.querySelectorAll('.option');
const progress = document.querySelector('.progress');
const footerQuiz = document.querySelector('.footer');
const answerMessage = document.querySelector('.result');
const scoreValue = document.querySelector('.score-value');
const btnNext = document.querySelector('.btn-action');

function showContent() {
    progress.textContent = 'Question ' + (questionNumber + 1) + ' of ' + questions.length;

    let current = questions[questionNumber];
    h2Question.textContent = current.question;

    for (let i = 0; i < btnOptions.length; i++) {
        btnOptions[i].textContent = current.options[i];
    }
}

function pickAnswer(answerChoice) {
    let currentQuestion = questions[questionNumber];
    btnNext.disabled = false;

    if (answerChoice === currentQuestion.answer) {
        score++;
        scoreValue.textContent = score;
        btnOptions[answerChoice].style.backgroundColor = 'green';
        footerQuiz.classList.remove('hidden');
    } else {
        footerQuiz.classList.remove('hidden');
        answerMessage.textContent = `Not quite! The answer is ${btnOptions[currentQuestion.answer].textContent}`;
        answerMessage.style.color = 'red';
        btnOptions[answerChoice].style.backgroundColor = 'red';
        btnOptions[currentQuestion.answer].style.backgroundColor = 'green';
    }

    for (let count = 0; count < btnOptions.length; count++) {
        btnOptions[count].disabled = true;
    }
}

optionList.addEventListener('click', (e) => {
    let btnClick = e.target.closest('.option');
    if (!btnClick) return;

    let ansIndex = Array.from(btnOptions).indexOf(btnClick);
    pickAnswer(ansIndex);
});

btnNext.addEventListener('click', () => {
    questionNumber++;

    // reset everything the last answer changed
    btnOptions.forEach((btn) => {
        btn.style.backgroundColor = '';
        btn.disabled = false;
    });
    footerQuiz.classList.add('hidden');
    answerMessage.textContent = 'Correct!';
    answerMessage.style.color = '';
    btnNext.disabled = true;

    // no questions left: show the final score
    if (questionNumber === questions.length) {
        h2Question.textContent = `Quiz finished! Score: ${score} / ${questions.length}`;
        optionList.style.display = 'none';
        progress.textContent = '';
        return;
    }

    showContent();
});

showContent();