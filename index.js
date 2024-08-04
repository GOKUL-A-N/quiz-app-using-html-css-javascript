const questions = [
    {
      question: "who won ipl 2022?",
      choices: ["Mi", "RCB", "GT"],
      correct: 2
    },
    {
      question:
        "Man of the series of t20 wc 2024?",
      choices: ["Jasprit", "Hardik", "Kholi"],
      correct: 0
    },
    {
      question: "One of the Ipl Banned Team",
      choices: ["CSK", "RCB", "SRH"],
      correct: 0
    },
    {
      question:
        "Which team does sai sudharsan play for?",
      choices: ["MI", "CSK", "GT"],
      correct: 1
    },
  ];
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  
  function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;
  
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
      choice.textContent = questions[currentQuestion].choices[index];
    });
  
  }
  
  function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
      feedback.textContent = "Correct!";
      correctAnswers++;
    } else {
      feedback.textContent = "Incorrect!";
    }
  
    setTimeout(() => {
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
      }
    }, 1000);
  }
  
  showQuestion();
  