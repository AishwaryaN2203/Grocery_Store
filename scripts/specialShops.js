let currentQuestion = 0;
const userAnswers = [];

function answerQuestion(isYes) {
  userAnswers.push(isYes);

  if (currentQuestion < questions.length -1) {
    currentQuestion++;
    displayNextQuestion();
  } else {
    displayOffer();
  }
}

function displayNextQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <p>${questions[currentQuestion].question}</p>
    <button onclick="answerQuestion(true)">Yes</button>
    <button onclick="answerQuestion(false)">No</button>
    <button onclick="answerQuestion(false)">Skip</button>
  `;
}

function displayOffer() {
  const offerContainer = document.getElementById("offer-container");
  offerContainer.style.display = "block";

  const qualificationInfo = document.getElementById("qualification-info");
  qualificationInfo.textContent = getQualificationInfo(userAnswers);

  const offerInfo = document.getElementById("offer-info");

  if(userAnswers[0] && userAnswers[1]&& userAnswers[2]){
    offerInfo.textContent = offers[0];
  }
  else if((!userAnswers[0] && userAnswers[1]&& userAnswers[2]) || (userAnswers[0] && !userAnswers[1]&& userAnswers[2]) || (userAnswers[0] && userAnswers[1]&& !userAnswers[2])){
    offerInfo.textContent = offers[1];
  }
  else if((!userAnswers[0] && !userAnswers[1]&& userAnswers[2]) || (userAnswers[0] && !userAnswers[1]&& !userAnswers[2]) || (!userAnswers[0] && userAnswers[1]&& !userAnswers[2])){
    offerInfo.textContent = offers[2];
  }
  else{
    offerInfo.textContent = offers[3];
  }

  const timeSpent = document.getElementById("time-spent");
  const totalTimeSpent = userAnswers.length * 5;
  timeSpent.textContent = `Total time spent: ${totalTimeSpent} seconds`;
}

function getQualificationInfo(answers) {
  let info = "Based on your answers:";
  if (answers[0]) {
    info += " You're a student.";
  }
  if (answers[1]) {
    info += " You're a low-income person.";
  }
  if (answers[2]) {
    info += " You're a frequent shopper with us.";
  }
  return info;
}

// Initialize with the first question
displayNextQuestion();
