const questions = [
  {
    question: "Which tag creates a link in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
  },
  {
    question: "Which tag is used for interactivity in a web page?",
    options: ["<link>", "<a class=button>", "<dialog>", "<button>"],
  },
];

let questionNumber = 1;

const mainQuestion = document.querySelector(".question");
const optionList = document.querySelector(".grid-items");
const btnOptions = document.querySelectorAll(".grid-item");
const progress = document.querySelector(".progress");
const footerContent = document.querySelector(".footer-para");

function showContent() {
  progress.textContent =
    "Question " + questionNumber + " of " + questions.length;

  let current = questions[questionNumber];
  mainQuestion.textContent = current.question;

  for (let index = 0; index < btnOptions.length; index++) {
    btnOptions[index].textContent = current.options[index];
  }
}

showContent();

btnOptions[0].addEventListener("click", () => {
  footerContent.classList.toggle("hidden");
});
