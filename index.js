const readlineSync = require("readline-sync");
// import chalk from 'chalk'; 
const chalk = require("chalk");

const rightAnswer = chalk.bgGreen;
const wrongAnswer = chalk.bgRed;
const result = chalk.inverse;

// Welcome function
function welcomeParticipant() {
    const name = readlineSync.question("What is your name ? ");
    console.log(chalk.bold(`Hello ${name}, Welcome to TRIVA ABOUT ME !!!!`));
    console.log(chalk.white.bgBlue("This trivia is a two part trivia, if you score 2 out four in 1st part, you progress to second part."));
}

// Check userInput answers
const checkAnswers = (question, answer) => {
  const userAnswer = readlineSync.question(question);
  if (answer.toLowerCase() == userAnswer.toLowerCase()) {
    console.log(rightAnswer("Your answer is right"))
    return true
  }
  else {
    console.log(wrongAnswer("Your answer is wrong"))
    console.log("Correct answer is ", answer)
    return false;
  }

}

/// Multiple Choice Question Handling Function
const checkMultipleChoiceAnswers = (question, options, correctAnswer) => {
  const index = readlineSync.keyInSelect(options, question);

  console.log("Your selected answer: ", options[index]);

  if (options[index] == correctAnswer) {
    console.log(rightAnswer("YAYY!!, Your answer is right"));
    return true;
  }
  else {
    console.log(wrongAnswer(" Oh nooo!!!, You selcted wrong option"));
    console.log("Correct Answer was ", correctAnswer);
    return false;
  }
}


//// Quiz logic
const playQuiz = (questions, multipleChoiceQuestions) => {

  welcomeParticipant();

  let score = 0;

  questions.forEach((question) => {
    if (checkAnswers(question.question, question.answer)) {
      score += 1;
    }
    console.log("Total score : ", score);
  })

  if (score >= 2) {

    console.log("You proceed to level 2, Congratulations!!");
    multipleChoiceQuestions.forEach((question) => {
      if (checkMultipleChoiceAnswers(question.question, question.options, question.correctAnswer)) {
        score += 1;
      }

      console.log("Total score : ", score)
    })
  }

  else {
    console.log("You did not qualify to part-2 , it was multiple choice quiz. Please try again.")
  }

  console.log(result("Your final score is :", score));
}





// List of questions
const questionList = [

  {
    question: "What is my name ? ",
    answer: "Dhruv"
  },

  {
    question: "In which city do I live ? ",
    answer: "Pune"
  },

  {
    question: "Am I married ? (Yes / No) ",
    answer: "yes"
  },

  {
    question: "Is my age above 25 ? (Yes / No) ",
    answer: "yes"
  }

]


// Mulitiple Choice questions
const multipleChoiceQuestions = [

  {
    question: "What is my favorite cuisine?",
    options: ["Chinese", "Continental", "Mexican", "Indian"],
    correctAnswer: "Continental"
  },

  {
    question: "Which programming language am I learning?",
    options: ["Javascript", "Java", "Python", "C++"],
    correctAnswer: "Javascript"
  },

  {
    question: "Which sport do I watch ?",
    options: ["Cricket", "F1", "Football", "Basketball"],
    correctAnswer: "Cricket"
  }

]
playQuiz(questionList, multipleChoiceQuestions)