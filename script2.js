const questions = [
  {
      numb: 1,
      question: "Which plant is known for its skin-healing properties and is commonly used in lotions and gels?",
      answer: "Aloe Vera",
      options: ["Mint Leaves", "Ginger Root", "Aloe Vera", "Neem Tree"]
  },
  {
      numb: 2,
      question: "Which plant is known for its use in treating digestive disorders and respiratory issues?",
      answer: "Dried Belleric Myrobalan (Terminalia bellirica)",
      options: ["Dried Indian Gooseberry", "Black Myrobalan", "Dried Belleric Myrobalan", "Turmeric"]
  },
  {
      numb: 3,
      question: "Which plant is used to improve digestion and is also known for its antioxidant properties?",
      answer: "Dried Indian Gooseberry (Phyllanthus emblica)",
      options: ["Aloe Vera", "Dried Indian Gooseberry", "Mint Leaves", "Neem Tree"]
  },
  {
      numb: 4,
      question: "Which plant is commonly used in organic farming as a natural pesticide?",
      answer: "Neem Tree",
      options: ["Black Myrobalan", "Mint Leaves", "Ginger Root", "Neem Tree"]
  },
  {
      numb: 5,
      question: "Which plant is known for its powerful anti-inflammatory compound called curcumin?",
      answer: "Turmeric",
      options: ["Turmeric", "Aloe Vera", "Moringa", "Ginger Root"]
  }
  // Add more questions here if needed
];

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const questionEl = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const resultContainer = document.getElementById('result-container');
  const resultEl = document.getElementById('result');
  const questionContainer = document.getElementById('question-container');
  const nextBtn = document.getElementById('next-btn');

  function showQuestion(index) {
    const question = questions[index];
    questionEl.innerText = question.question;
    optionsContainer.innerHTML = question.options.map(option => 
      `<button class="option-btn">${option}</button>`
    ).join('');
  }

  function checkAnswer(selectedOption, correctAnswer) {
    resultEl.innerText = selectedOption === correctAnswer
      ? `     Correct! 
                     The answer is ${correctAnswer}.`
      : `     Wrong.
                     The correct answer is ${correctAnswer}.`;

    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  }

  optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn')) {
      const selectedOption = e.target.innerText;
      checkAnswer(selectedOption, questions[currentQuestionIndex].answer);
    }
  });

  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
      questionContainer.style.display = 'block';
      resultContainer.style.display = 'none';
    } else {
      resultEl.innerText = 'Quiz completed!';
      resultContainer.style.display = 'block';
      nextBtn.style.display = 'none'; // Hide the Next Question button
    }
  });

  // Initial call to display the first question
  showQuestion(currentQuestionIndex);
});
