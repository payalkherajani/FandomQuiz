//Packages
var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log("You will be given 5 questions related to HERA PHERI movie! All the Best");

//Taking Input
var userName = readlineSync.question("Your name please! ");
console.log(chalk.bgRed("Welcome " + userName + " to HERA-PHERI QUIZ"));

var score = 0;

var arrayofQuestions = [
  {
  question:"What is the full-form of Raju's degree ITUS? " ,
  answer:"International talent of ultimate student" ,
  options: ["International talent of ultimate student","Iski topi uske ser"],
  },

  {
  question: "How much money did Kabira demand initially? ",
  answer: "10 lakh",
  options: ["10 lakh", "30 lakh"],
  },{
    question:" The film was a remake of a Malayalam film titled? ",
    answer:"Ramji Rao Speaking",
    options:["Nadodikkatu","Ramji Rao Speaking"]
  },
   {
    question:"While rescuing the kid who did the trio dress up as? ",
    answer:"Zorro",
    options:["Zorro","Batman"]
  },
   {
    question:"How much money did Shyam owe Khadak Singh? ",
    answer:"Rs 35000",
    options:["Rs 45000","Rs 35000"]
  }
  
]

var highScore = [
  {
    name: "payal",
    score: "5"
  },
  {
    name: "Priya",
    score: "2"
  }
]

function verification(userAns,ans){
  if(userAns === ans){
    score = score + 1;
    console.log(chalk.bgGreen("Correct!"))
  }
  else {
    console.log(chalk.bgRedBright("Wrong!"))
  }
}

for(var i =0 ; i< arrayofQuestions.length; i++){

console.log(arrayofQuestions[i].question);
console.log(arrayofQuestions[i].options);
var userAnswer = readlineSync.question("Choose 1 or 2 as your selected option ");
var userSelectedOption = arrayofQuestions[i].options[userAnswer-1];
verification(userSelectedOption,arrayofQuestions[i].answer);
}

function highScoreEvaluate() {
 console.log(chalk.bgRedBright("Your Score is " + score));
 console.log("Check the high score, send me your score Screenshot, I will add you too!")
 highScore.map(s => console.log(s.name + " Score is  " + s.score));
}

highScoreEvaluate();